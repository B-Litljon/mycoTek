const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fruitbodySchema = new Schema({
    description: { type: String, required: true },
    image: { type: String, required: true },
    dateFruited: { type: Date, default: Date.now },
    characteristics: [String],
    yield: { type: Number, required: true },
    potency: String,
    conditions: {
        temperature: Number,
        humidity: Number,
        light: String,
        substrate: String
    },
    teks: [{ type: String }],
    notes: [String]
});

module.exports = fruitbodySchema;
