const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sporeSchema = new Schema({
    strain: String,
    source: String,
    dateAcquired: Date,
    viability: String,
    storageMethod: String,
    notes: [String],
    images: [String]
});

module.exports = sporeSchema;