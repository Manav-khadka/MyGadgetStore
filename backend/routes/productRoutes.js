const express = require('express');
const {getAllProducts, createProduct,updateProduct,getSingleProduct,deleteProduct,createProductReview} = require('../controllers/productController');
const { isAuthenticatedUser,authorizeRoles } = require('../middleware/auth');

const router = express.Router();


router.route('/products').get(getAllProducts);//get all products
router.route('/admin/product/new').post(isAuthenticatedUser,authorizeRoles("admin"),createProduct);//create new product
router.route('/admin/product/:id').put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct).delete(isAuthenticatedUser,deleteProduct);//update product amd delete product
router.route('/product/:id').get(getSingleProduct);//get single product

//@desc createProductReview
router.route("/review").put(isAuthenticatedUser,createProductReview);

module.exports = router 