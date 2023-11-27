const mongoose = require("mongoose");

const SporeSchema = require("./sporeSchema");
const MyceliumSchema = require("./myceliumSchema"); 
const FruitbodySchema = require("./fruitbodySchema");

const speciesSchema = new Schema({
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



module.exports = mongoose.model('Species', speciesSchema);