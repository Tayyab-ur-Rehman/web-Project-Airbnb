const mongoose = require('mongoose');

// Define the schema for an item
const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // Makes the field mandatory
    },
    description: {
        type: String,
        required: true, // Makes the field mandatory
    },
});

// Create the model using the schema
const Item = mongoose.model('Item', itemSchema);

// Export the model to use it in other files
module.exports = Item;
