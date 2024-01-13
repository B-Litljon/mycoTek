const User = require('../models/user');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
    let { username, password, email } = req.body;
    username = username.trim().toLowerCase();
    // confirm data
    if (!username || !password || !email) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }
    // check if user already exists
    const duplicate = await User.findOne({ username }).lean().exec();
    if (duplicate) {
        return res.status(409).json({ message: 'User already exists' });
    }
    // hash the pass YO
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
});

const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const user = await User.findOne({ username }).lean().exec();
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate a token or start a session here (optional)
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    // Return necessary user info (exclude password and other sensitive data)
    const userInfo = { ...user, password: undefined };
    res.json({userInfo, token});
});

// @desc Patch a user   
// @route PATCH /users/:id
// @access private

const updateUser = asyncHandler(async (req, res) => {    // doesn't work yet - need to fix from what I remember, but I'm not sure what's wrong
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

module.exports = { getUsers, createUser, updateUser, removeUser, loginUser };