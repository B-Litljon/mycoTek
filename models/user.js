const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        minlength: [3, "Username must be at least 3 characters long"],
        maxlength: [20, "Username must be less than 20 characters long"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters long"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        minlength: [5, "Email must be at least 5 characters long"],
        maxlength: [50, "Email must be less than 50 characters long"]
    }, 
    species: [{
        type: Schema.Types.ObjectId,
        ref: 'Species'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", userSchema);