const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
dotenv.config(); 
const Listing = require('./models/listing.js'); // Import the Item model
const Host = require('./models/host.js'); // Import the Item model
const Booking = require('./models/booking.js'); // Import the Item model
const User = require('./models/user.js'); // Import the Item model

function calculateDaysBetween(startDate, endDate) {
  // Ensure that the input is in the proper Date format
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Validate if the dates are valid
  if (isNaN(start) || isNaN(end)) {
      throw new Error("Invalid date format. Please provide valid dates.");
  }

  // Calculate the difference in milliseconds
  const diffInMillis = end - start;

  // Convert milliseconds into days (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
  const days = diffInMillis / (1000 * 60 * 60 * 24);

  return Math.abs(Math.floor(days)); // Use Math.abs to handle negative date ranges
}


const URI = process.env.MONGO_URI; 
console.log('MongoDB URI:', URI);
const categories = [
  "Beachfront",
  "Luxury Villas",
  "Rustic Cabins",
  "Urban Lofts",
  "Pet-Friendly",
  "Tiny Homes",
  "Treehouses",
  "Farm Stays",
  "City Apartments",
  "Ski Chalets",
  "Lakefront",
  "Eco-Friendly",
  "Historic Homes",
  "Business Stays",
  "Adventure Hubs",
  "Family-Friendly",
  "Romantic Getaways",
  "Mountain Retreats",
  "Glamping",
  "Budget Stays"
];


function areDateRangesOverlapping(start1, end1, start2, end2) {
  // Convert Date objects to their timestamp equivalents
  const start1Time = start1.getTime();
  const end1Time = end1.getTime();
  const start2Time = start2.getTime();
  const end2Time = end2.getTime();

  // Check if the date-time ranges overlap
  return (start1Time <= end2Time) && (start2Time <= end1Time);
}

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect(URI);
   
    

    app.get("/auth/token", async (req, res) => {
      try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
        const isExpired = Date.now() >= decoded.exp * 1000;
        if (isExpired) {
          return res.status(401).send("Token expired");
        }
    
        const user = await User.findById(decoded.id);
        console.log(user);
        res.status(200).json({ user });
      } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong");
      }
    });
    
    app.post("/host", async (req, res) => {
        
        try {
          // Create a new host using the request body
          const host = new Host({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
          });
      
          // Save the host to the database
          const savedHost = await host.save();
         
          // Respond with the saved host
          res.status(201).json(savedHost);
        } catch (error) {
          // Handle errors (e.g., duplicate email, validation errors)
          res.status(400).json({ message: error.message });
        }
      });
    app.get("/host", async (req, res) => {
        try {
          //
          const host = await Host.findOne({email:req.body.email});
     
          res.status(200).json(host);
        } catch (error) {
          // Handle errors (e.g., database connection issues)
          res.status(500).json({ message: error.message });
        }
      });



      app.post("/user/signup", async (req, res) => {
        try {
          const sameEmail=await User.findOne({email:req.body.email});
          
          console.log("signup");
          const hash=await bcrypt.hash(req.body.password,10);

          const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash,
          });
          // Save the host to the database
          const savedUser = await user.save();
      
          // Respond with the saved host
          res.status(201).json(savedUser);
        } catch (error) {
          // Handle errors (e.g., duplicate email, validation errors)
          res.status(400).json({ message: error.message });
        }
      });
    app.post("/user/signin", async (req, res) => {
        try {
          const GivenEmail=req.body.email;
          const GivenPassword=req.body.password;
          const user = await User.findOne({email:GivenEmail});
          if(!user)
            return res.status(401).json({message:'User not found'});
          
          const match=await bcrypt.compare(GivenPassword,user.password);

          if(!match)
            return res.status(401).json({message:'Wrong password'});
          console.log(user);
          
          const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'});  
          console.log(user);
          
          res.status(200).json({user,token});


        } catch (error) {
          // Handle errors (e.g., database connection issues)
          res.status(500).json({ message: error.message });
        }
      });



      //post a single listing by host
      app.post("/listing/host", async (req, res) => {
        try {
          // Create a new host using the request body
          const listing = new Listing({
            title: req.body.title,
            hostId: req.body.hostId,
            location: req.body.location,
            price: req.body.price,
            image: req.body.image,
          });
      
          // Save the host to the database
          const savedlisting = await listing.save();
      
          // Respond with the saved host
          res.status(201).json(listing);
        } catch (error) {
          // Handle errors (e.g., duplicate email, validation errors)
          res.status(400).json({ message: error.message });
        }
      });
      app.delete("/listing/host/:listingid", async (req, res) => {
        const listingId = req.params.listingid;
        try {
          const deletedListing = await Listing.findByIdAndDelete(listingId);
      
          if (!deletedListing) {
            return res.status(404).json({ message: "Listing not found" });
          }
      
          res.status(200).json({ message: "Listing deleted successfully" });
        } catch (error) {
          res.status(500).json({ message: "Error deleting listing", error });
        }
      });
      //get all listings using hostId
      app.get("/listing/host/:hostId", async (req, res) => {
        try {
          
          const hostIdGiven =req.params.hostId;
          const listings = await Listing.find({hostId:hostIdGiven});
          if(!listings)
              res.status(404).json({message:'could not find specified host'});
          res.status(200).json(listings);
        } catch (error) {
          // Handle errors (e.g., database connection issues)
          res.status(500).json({ message: error.message });
        }
      });
     
      




      app.get("/listing", async (req, res) => {
        try {
          const listings = await Listing.find({});
          
          res.status(200).json(listings);
        } catch (error) {
          // Handle errors (e.g., database connection issues)
          res.status(500).json({ message: error.message });
        }
      });
      //get all listings by category for user 
    app.get("/listing/category/:category", async (req, res) => {
        try {
          const categoryGiven=req.params.category;
          console.log(categoryGiven);

          const listings = await Listing.find({category:categoryGiven});
          console.log(listings);
          
          res.status(200).json(listings);
        } catch (error) {
          // Handle errors (e.g., database connection issues)
          res.status(500).json({ message: error.message });
        }
      });
      // get a listing by listing id 
      app.get("/listing/:id", async (req, res) => {
        try {
          //
          const id=req.params.id;
          const listing = await Listing.findById({_id:id});
          if(!listing)
              res.status(404).json({message:'could not find specified listing'});

          res.status(200).json(listing);
        } catch (error) {
          // Handle errors (e.g., database connection issues)
          res.status(500).json({ message: error.message });
        }
      });

      

    //for user updating the booking and return the booking object back to the frontend 
      app.post("/booking", async (req, res) => {
        try {
            const listingId1 = req.body.listingid; // Extract the listing ID from the request body
            const userid1 = req.body.userid; // Extract the listing ID from the request body
            const checkIn1= req.body.checkIn; // Extract the listing ID from the request body
            const checkOut1 = req.body.checkOut; // Extract the listing ID from the request body
            const cost = req.body.cost; // Extract the listing ID from the request body
           
              console.log(listingId1);
              console.log(userid1);
              console.log(checkIn1);
              console.log(checkOut1);
            // Update the booking field to true

            // const OverlappingDates=await Booking.find({listingid:listingId1});
            // OverlappingDates.forEach((booking) => {
            // if(areDateRangesOverlapping(booking.checkIn,booking.checkOut,checkIn1,checkOut1))
            // {
            //   res.status(200).json({message :'Not avaliable at this time slot'});

            //   return;
            // }
            // });
            const amount1 =cost*calculateDaysBetween(checkIn1,checkOut1);
            const book=Booking({
               listingId:listingId1,
               userId:userid1,
               checkIn:checkIn1,
               checkOut:checkOut1,
               amount:amount1
            });
            const output=await book.save();
           console.log("booked");
            res.status(201).json({ output });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });   
    //get all booking of a host using host id 
    app.get("/booking/host/:hostId", async (req, res) => {
      const hostId = req.params.hostId;
      try {
        const allListings = await Listing.find({ hostId: hostId });
        const listingIds = allListings.map(listing => listing._id);
        const allBookings = await Booking.find({ listingId: { $in: listingIds } });
    
        res.status(200).json(allBookings);
      } catch (error) {
        res.status(500).json({ message: "Error fetching bookings", error });
      }
    });
    //get all booking of a user using user id
    app.get("/booking/user/:userId",async (req,res)=>{
      const userId =req.params.userId;
      const allBooking= await Booking.find({userId:userId});

        if(!allBooking)
          res.status(404).json({message:'No booking of listing for specified user'});
        const listingIds = [...new Set(allBooking.map((booking) => booking.listingId))];

        // Fetch all listings using the extracted IDs
        const allListing = await Listing.find({ _id: { $in: listingIds } });
        res.status(200).json({allBooking,allListing});
     });





// Fetch all listings (admin view)
app.get("/api/admin/listing", async (req, res) => {
  try {
    const allListings = await Listing.find({});
    res.status(200).json(allListings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching listings", error });
  }
});
//get only admins listings
app.get("/api/admin/mylisting", async (req, res) => {
  try {
    const allListings = await Listing.find({isAdmin:true});
    res.status(200).json(allListings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching listings", error });
  }
});
// Add a new listing for admin
app.post("/admin/listing", async (req, res) => {
  try {
    const { title, location, price, image, category } = req.body;

    // Validate required fields
    if (!title|| !price || !category||!location || !image) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    // Create and save a new listing
    const newListing = new Listing({
      title,
      hostId:null,
      location,
      price,
      image,
      category,
      isAdmin:true
    });

    const savedListing = await newListing.save();
    res.status(201).json(savedListing);
  } catch (error) {
    res.status(500).json({ message: "Error adding new listing", error });
  }
});
// Delete a listing by ID (admin only)
app.delete("/admin/listing/:id", async (req, res) => {
  const listingId = req.params.id;
  try {
    const deletedListing = await Listing.findByIdAndDelete(listingId);

    if (!deletedListing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    res.status(200).json({ message: "Listing deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting listing", error });
  }
});




// View all bookings (admin overview)
app.get("/admin/bookings/:bookingid", async (req, res) => {
  try {
    const allBookings = await Booking.find({})
     

    res.status(200).json(allBookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error });
  }
});

       
    
      
      
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
