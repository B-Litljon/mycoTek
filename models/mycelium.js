const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const myceliumSchema = new Schema({
    strain: String,
    stage: String,
    substrate: String,
    growthRate: Number,
    contaminationRisk: String,
    harvestDate: Date,
    notes: [String],
    images: [String]
});

module.exports = myceliumSchema;
