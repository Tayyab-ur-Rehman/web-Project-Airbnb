const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensure no duplicate emails
    match: [/.+@.+\..+/, "Please enter a valid email address"], // Validate email format
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true, // Ensure password is provided
  },
});

module.exports = mongoose.model("User", userSchema);
