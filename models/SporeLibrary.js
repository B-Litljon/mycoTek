import mongoose from "mongoose";  


const sporeSchema = new mongoose.Schema({
    species: String, //eg cubensis, cyanescens, ovoid, azurescens, etc
    strain: String, //variant of a species, eg "B+" or "Golden Teacher"
    source: String, //eg "Sporeworks", "Mushrooms.com", "Mycohaus" the goal here is to be able to track which vendors have the best genetics
    dateAcquired: Date,
    viability: String, //eg "viable", "unviable", "unknown"
    storageMethod: String, //eg "agar", "grain", "liquid culture", "spore print", "spore syringe", "spore swab", "clone", "clone swab"
    notes: [String],
    images: [String], //array of image urls
});

module.exports = mongoose.model("SporeLibrary", sporeSchema);
