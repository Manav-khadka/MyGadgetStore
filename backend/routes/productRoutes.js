const express = require('express');
const {getAllProducts, createProduct,updateProduct,getSingleProduct,deleteProduct} = require('../controllers/productController');

const router = express.Router();


router.route('/products').get(getAllProducts);//get all products
router.route('/admin/product/new').post(createProduct);//create new product
router.route('/admin/product/:id').put(updateProduct).delete(deleteProduct);//update product amd delete product
router.route('/product/:id').get(getSingleProduct);//get single product

module.exports = router 