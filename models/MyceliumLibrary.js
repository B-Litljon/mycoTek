const mongoose = require("mongoose");

const myceliumCultureSchema = new mongoose.Schema({
    species: String,
    strain: String,
    stage: String, // e.g., "Inoculation", "Colonization", "Fruiting"
    substrate: String,
    growthRate: Number, // e.g., in mm/day
    contaminationRisk: String, // e.g., "High", "Medium", "Low"
    harvestDate: Date,
    notes: [String],
    images: [String], // URLs or file paths to images
  });

module.exports = mongoose.model("MyceliumLibrary", myceliumCultureSchema);