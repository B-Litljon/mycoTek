const user = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');


// @desc    Get all users
// @route   GET /users
// @access  private

const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find().select('-password').lean();
    if (!users) {
        return res.status(404).json({ message: 'No users found' });
    }
    res.json(users);
});

// @desc Post a new user
// @route POST /users
// @access private

const createUser = asyncHandler(async (req, res) => {
    const { username, password, email } = req.body;

    // confirm data
    if (!username || !password || !email) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }
    // check if user already exists
    const duplicate = await User.findOne({ username }).lean().exec();

    if (duplicate) {
        return res.status(409).json({ message: 'User already exists' });
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt); //salt the hash 10 times
    const newUser = await user.create({ username, password: hashedPassword, email });
    res.json(newUser);
});

// @desc Patch a user   
// @route PATCH /users/:id
// @access private

const updateUser = asyncHandler(async (req, res) => {    
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const updatedUser = await user.findByIdAndUpdate(req.params.id, { username, password: hashedPassword }, { new: true });
    res.json(updatedUser);
});

// @desc Delete a user  
// @route DELETE /users/:id
// @access private

const removeUser = asyncHandler(async (req, res) => {
    const deletedUser = await user.findByIdAndDelete(req.params.id);
    res.json(deletedUser);
});

module.exports = { getUsers, createUser, updateUser, removeUser };