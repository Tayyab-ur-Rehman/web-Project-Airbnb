const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config(); 
const Listing = require('./models/listing.js'); // Import the Item model
const Host = require('./models/host.js'); // Import the Item model
const Booking = require('./models/booking.js'); // Import the Item model
const User = require('./models/user.js'); // Import the Item model

const URI = process.env.MONGO_URI;
console.log('MongoDB URI:', URI);


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

    app.post("/host", async (req, res) => {
        
        try {
          // Create a new host using the request body
          const host = new Host({
            name: req.body.name,
            email: req.body.email,
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



      app.post("/user", async (req, res) => {
        try {
          // Create a new host using the request body
          const user = new User({
            name: req.body.name,
            email: req.body.email,
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
    app.get("/user", async (req, res) => {
        try {
          //
          const user = await User.findOne({email:req.body.email});
          
          res.status(200).json(user);
        } catch (error) {
          // Handle errors (e.g., database connection issues)
          res.status(500).json({ message: error.message });
        }
      });


      //post a single listing
      app.post("/listing", async (req, res) => {
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
      //get all listings using hostId
      app.get("/listing/host/:hostId", async (req, res) => {
        try {
          //
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


      //get all listings by category 
    app.get("/listing", async (req, res) => {
        try {
          const categoryGiven=req.body.category;
          const listings = await Listing.find({category:categoryGiven});
          
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
            if (!listingId1) {
                return res.status(400).json({ error: "Listing ID is required" });
            }
    
            // Update the booking field to true

            const OverlappingDates=await Booking.find({listingid:listingId1});
            OverlappingDates.forEach((booking) => {
            if(areDateRangesOverlapping(booking.checkIn,booking.checkOut,checkIn1,checkOut1))
            {
              res.status(200).json({message :'Not avaliable at this time slot'});
              return;
            }
            });

            const book=Booking({
               listingId:listingId1,
               userid:userid1,
               checkIn:checkIn1,
               checkOut:checkOut1,
            });
            const output=await book.save();

            res.status(201).json({ bookingId: output });
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
        res.status(200).json(allBooking);
     });
    
       
    
      
      
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
