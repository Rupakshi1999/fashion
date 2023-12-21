const { StatusCodes } = require('http-status-codes');
const errorHandlerMiddleware = (err, req, res, next) => {
  let Error = {
    // set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || 'Something went wrong, try again later',
  };

  // mongoose errors
  if (err.name === 'ValidationError') {
    Error.statusCode = StatusCodes.BAD_REQUEST;
  }

  if (err.code && err.code == '11000') {
    Error.message = `Already taken ${Object.keys(err.keyValue)}`;
    Error.statusCode = StatusCodes.BAD_REQUEST;
  }

  if (err.name === 'CastError') {
    Error.message = `No item found with ID ${err.value}`;
    Error.statusCode = StatusCodes.NOT_FOUND;
  }

  return res.status(Error.statusCode).json({ msg: Error.message });
};

module.exports = errorHandlerMiddleware;
