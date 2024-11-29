const mongoose = require('mongoose');
const hostSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
  });
  
  // Explicitly define the collection name
  module.exports = mongoose.model("Host", hostSchema, "myCustomHostCollection");
  