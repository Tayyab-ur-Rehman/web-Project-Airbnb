const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  listingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Listing", // Reference the Listing model
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference the User model
    required: true,
  },
  checkIn: {
    type: Date,
   
  },
  checkOut: {
    type: Date,
   
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
