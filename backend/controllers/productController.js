const Product = require('../models/productModel');

const ErrorHandler = require('../utils/errorHandler');

const catchAsyncErrors = require('../middleware/catchAsyncError');

const ApiFeatures = require('../utils/apiFeatures');

//req-- Request, res---Response, next---next middleware




// @desc    Create new product
// @route   POST /api/v1/admin/product/new\
exports.createProduct = catchAsyncErrors( async (req, res,next) => {
    req.body.user = req.user.id;
    
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })

})




// @desc    Get all products
// @route   GET /api/v1/products
// Get All Product
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
    const resultPerPage = 8;
    const productsCount = await Product.countDocuments();
  
    const apiFeature = new ApiFeatures(Product.find(), req.query)
      .search()
      .filter()
      .pagination(resultPerPage);
  
    let products = await apiFeature.query.clone();
  
    let filteredProductsCount = products.length;
  
    apiFeature.pagination(resultPerPage);
  
    products = await apiFeature.query.clone();
  
    res.status(200).json({
      success: true,
      products,
      productsCount,
      resultPerPage,
      filteredProductsCount,
    });
  });
  
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
//@desc product review and update review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
    const { rating, comment, productId } = req.body;
  
    const review = {
      user: req.user._id,
      name: req.user.name,
      rating:Number(rating),
      comment,
  
    };
  
    const product = await Product.findById(productId);
  
    const isReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );
  
    if (isReviewed) {
      product.reviews.forEach((review) => {
        if (review.user.toString() === req.user._id.toString()) {
          review.comment = comment;
          review.rating = rating;
        }
      });
    } else {
      product.reviews.push(review);
      product.numOfReviews = product.reviews.length;
    }
  
    product.ratings =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;
  
    await product.save({ validateBeforeSave: false });
  
    res.status(200).json({
      success: true,
    });
  }
  );