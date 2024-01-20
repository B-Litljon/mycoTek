const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/tokenAuth');


router.route('/')
    .get(auth, userController.getUsers)
    .post(auth, userController.createUser)
    .patch(auth, userController.updateUser)
    .delete(auth, userController.removeUser)

router.post('/login', userController.loginUser);

module.exports = router;
