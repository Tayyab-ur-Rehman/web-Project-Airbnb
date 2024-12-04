const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  hostId: { type: mongoose.Schema.Types.ObjectId, ref: "Host" },
  price: { type: Number, required: true },
  location: { type: String },
  about: { type: String },
  image:{type:String},
  bedrooms: { type: Number },
  bathrooms: { type: Number },
  guests: { type: Number },
  category: { type: String, required: true },
  isAdmin: { type: Boolean, default:false }
});

module.exports = mongoose.model("Listing", listingSchema);


