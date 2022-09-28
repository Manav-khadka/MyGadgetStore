const ErrorHandler= require('../utils/errorHandler');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error';

    //castError wrong mongoose object id
//validationError wrong data type
if (err.name === 'CastError') {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
}

    res.status(err.statusCode).json({
        success: false,
        error: err.message,
    })

}
