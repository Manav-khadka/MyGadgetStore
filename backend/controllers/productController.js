const Product = require('../models/productModel');

const ErrorHandler = require('../utils/errorHandler');

const catchAsyncErrors = require('../middleware/catchAsyncError');

const ApiFeatures = require('../utils/apiFeatures');

//req-- Request, res---Response, next---next middleware




// @desc    Create new product
// @route   POST /api/v1/admin/product/new\
exports.createProduct = catchAsyncErrors( async (req, res,next) => {
    
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })

})




// @desc    Get all products
// @route   GET /api/v1/products

exports.getAllProducts =catchAsyncErrors( async (req, res,next) => {
    
    const resultPerPage = 5;
    const productCount = await Product.countDocuments();
    const apiFeatures = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter();
    let products = await apiFeatures.query;

    let filteredProductsCount = products.length;
      
    apiFeatures.pagination(resultPerPage);
    
    res.status(200).json({
        success: true,
        products,
        productCount,
        resultPerPage,
        filteredProductsCount,
    

    })
})

// @desc    Update product
// @route   PUT /api/v1/admin/product/:id
exports.updateProduct = catchAsyncErrors(async (req, res,next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product not found', 404))
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
)
// @desc    Delete product
// @route   DELETE /api/v1/admin/product/:id
exports.deleteProduct = async (req, res,next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product not found', 404))
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
        return next(new ErrorHandler('Product not found', 404))
    }

    res.status(200).json({
        success: true,
        product
    })
}
