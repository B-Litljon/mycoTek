const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SporeSchema = require("./sporeSchema");
const MyceliumSchema = require("./myceliumSchema");
const FruitbodySchema = require("./fruitbodySchema");

const speciesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20
    },
    createdAt: { type: Date, default: Date.now },
    spores: [SporeSchema],
    mycelium: [MyceliumSchema],
    fruitbody: [FruitbodySchema]
});

module.exports = mongoose.model('Species', speciesSchema);
