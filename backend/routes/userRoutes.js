const express = require('express');
const { registerUser } = require('../controllers/userController');
const router = express.Router();

//@desc Register a user
router.route("/register").post(registerUser);


module.exports = router;
