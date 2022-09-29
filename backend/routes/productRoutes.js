const express = require('express');
const {getAllProducts, createProduct,updateProduct,getSingleProduct,deleteProduct} = require('../controllers/productController');
const { isAuthenticateduser } = require('../middleware/auth');

const router = express.Router();


router.route('/products').get(isAuthenticateduser,getAllProducts);//get all products
router.route('/admin/product/new').post(createProduct);//create new product
router.route('/admin/product/:id').put(updateProduct).delete(deleteProduct);//update product amd delete product
router.route('/product/:id').get(getSingleProduct);//get single product

module.exports = router 