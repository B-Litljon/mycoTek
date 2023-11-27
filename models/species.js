const mongoose = require("mongoose");

const SporeSchema = require("./SporeSchema");
const MyceliumSchema = require("./MyceliumSchema"); 
const FruitbodySchema = require("./FruitbodySchema");

const SpeciesSchema = new Schema({
    name: {
        type: String,
        required: [true, "Species name is required"],
        unique: true,
        minlength: [3, "Species name must be at least 3 characters long"],
        maxlength: [20, "Species name must be less than 20 characters long"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    spores: [SporeSchema],     // Array of SporeSchema
    mycelium: [MyceliumSchema], // Array of MyceliumSchema
    fruitbody: [FruitbodySchema] // Array of FruitbodySchema
});

const Species = mongoose.model('Species', SpeciesSchema);

module.exports = Species;