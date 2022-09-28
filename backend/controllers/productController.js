const Product = require('../models/productModel.js');






// @desc    Create new product
// @route   POST /api/v1/admin/product/new\
exports.createProduct = async (req, res,next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })

}




// @desc    Get all products
// @route   GET /api/v1/products

exports.getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.status(201).json({
        success: true,
        products
    })
}

// @desc    Update product
// @route   PUT /api/v1/admin/product/:id
exports.updateProduct = async (req, res) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        product
    })
}

// @desc    Delete product
// @route   DELETE /api/v1/admin/product/:id
exports.deleteProduct = async (req, res,next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: 'Product is deleted.'
    })
}

// @desc    Get single product
// @route   GET /api/v1/product/:id
exports.getSingleProduct = async (req, res,next) => {  
    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }

    res.status(200).json({
        success: true,
        product
    })
}
