const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.route('/')
    .get(userController.getUsers)
    .post(userController.createUser)
    .patch(userController.updateUser)
    .delete(userController.removeUser)

router.post('/login', userController.loginUser);

module.exports = router;
