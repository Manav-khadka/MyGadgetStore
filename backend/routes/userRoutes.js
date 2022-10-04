const express = require('express');
const { registerUser,loginUser ,logout, forgotPassword,resetPassword, getUserDetails,updatePassword,updateProfile,getAllUser,deleteUser,updateUserRole,createProductReview} = require('../controllers/userController');
const {isAuthenticatedUser,authorizeRoles} = require('../middleware/auth');
const router = express.Router();


//@desc Register a user
router.route("/register").post(registerUser);

//@desc Login User
router.route("/login").post(loginUser);
//@desc Forget Password

router.route("/password/forget").post(forgotPassword);
//@desc Logout user

router.route("/logout").get(logout);


//@desc reset password
router.route("/password/reset/:token").put(resetPassword);

//@desc Get user details
router.route("/me").get(isAuthenticatedUser,getUserDetails);

//@desc Update change password
router.route("/password/update").put(isAuthenticatedUser,updatePassword);

//@desc Update user profile
router.route("/me/update").put(isAuthenticatedUser,updateProfile);

//@desc Get all user
router.route("/admin/users").get(isAuthenticatedUser,authorizeRoles('admin'),getAllUser);
router.route("/admin/user/:id").get(isAuthenticatedUser,authorizeRoles('admin'),getUserDetails);

//@desc delete user
router.route("/admin/delete/user/:id").delete(isAuthenticatedUser,authorizeRoles('admin'),deleteUser);

//@desc update user role
router.route("/admin/updaterole/:id").put(isAuthenticatedUser,authorizeRoles('admin'),updateUserRole);




module.exports = router;
