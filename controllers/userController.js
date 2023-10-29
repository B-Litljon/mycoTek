const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');


// @desc    Get all users
// @route   GET /users
// @access  private

const getUsers = asyncHandler(async (req, res) => { // functional :)
    const users = await User.find().select('-password').lean();
    if (!users) {
        return res.status(404).json({ message: 'No users found' });
    }
    res.json(users);
});

// @desc Post a new user
// @route POST /users
// @access private

const createUser = asyncHandler(async (req, res) => { // duplicate user check is functional :)
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
    const hashedPw = await bcrypt.hash(password, 10);
    // create user object with the hashed password and save to db
    const userObject = { username, "password": hashedPw, email };
    const newUser = await User.create(userObject);
    // confirm new user exists
    if (newUser) {
        res.status(201).json({ message: 'User created successfully' });
    } else {
        res.status(400).json({ message: 'Invalid user data' });
    }
    // return new user
    res.json(newUser);
});

// @desc Patch a user   
// @route PATCH /users/:id
// @access private

const updateUser = asyncHandler(async (req, res) => {    // doesn't work yet - need to fix
    // confirms username is the thing being updated
    if (username) {
        updateFields.username = username;
    }
    // confirms password is the thing being updated
    if (password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPw = await bcrypt.hash(password, salt);
        updateFields.password = hashedPw;
    }

    if (!username && !password) {
        return res.status(400).json({ message: 'Please provide a valid field to update' });
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, updateFields, { new: true });

    if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json(updatedUser);
});

// @desc Delete a user  
// @route DELETE /users/:id
// @access private

const removeUser = asyncHandler(async (req, res) => {
    // Finde the user first and check if they exist
    const userToDelete = await User.findByIdAndDelete(req.params.id);
    // if the user doesn't exist return a 404
    if (!userToDelete) {
        return res.status(404).json({ message: 'User not found' });
    }
    // if the user does exist return a 200 with the deleted user
    return res.status(200).json({
        message: 'User deleted successfully',
        deletedUser: userToDelete
    });
});

module.exports = { getUsers, createUser, updateUser, removeUser };