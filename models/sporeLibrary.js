import mongoose from "mongoose";  


const mongoose = require('mongoose');
const { Schema } = mongoose;

// Your existing Spore Schema
const SporeSchema = new Schema({
    // species field might be removed or kept based on your requirement
    strain: String,
    source: String,
    dateAcquired: Date,
    viability: String,
    storageMethod: String,
    notes: [String],
    images: [String], // array of image URLs
    // Additional fields as needed
});

module.exports = mongoose.model("SporeLibrary", sporeSchema);
