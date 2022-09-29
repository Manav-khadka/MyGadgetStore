const express = require('express');
const { registerUser,loginUser } = require('../controllers/userController');
const router = express.Router();

//@desc Register a user
router.route("/register").post(registerUser);

//@desc Login User
router.route("/login").post(loginUser);

module.exports = router;
