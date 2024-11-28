const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  hostId: { type: mongoose.Schema.Types.ObjectId, ref: "Host" },
  price: { type: Number, required: true },
  location: { type: String },
  image:{type:String},
  category: { type: String, required: true }
});

module.exports = mongoose.model("Listing", listingSchema);