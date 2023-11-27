const mongoose = require('mongoose');
const { Schema } = mongoose;

const fruitbodySchema = new Schema({
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    image: {
        type: String, // URL to the image
        required: [true, "Image is required"]
    },
    dateFruited: {
        type: Date,
        default: Date.now
    },
    characteristics: [String], // Array of characteristics like size, color, shape, etc.
    yield: {
        type: Number,
        required: [true, "Yield is required"]
    },
    potency: String, // Optional, based on the type of species
    conditions: {
        temperature: Number,
        humidity: Number,
        light: String, // Example: "Indirect light", "Darkness", etc.
        substrate: String // Type of substrate used
    },
    teks: [{ type: String }], // Techniques used, if applicable
    notes: [String], // Additional notes or observations
    // You can add more fields specific to your application's requirements
});

module.exports = fruitbodySchema;
