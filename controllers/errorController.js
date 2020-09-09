const appError = require('.././utils/appError');

const sendErrorForDev = (err, req, res) => {
  // API

  if (req.originalUrl.startsWith('/api')) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      error: err,
      stack: err.stack,
    });
  }
  // RENDERED WEBSITE

  return res.status(err.statusCode).render('error', {
    title: 'something went wrong',
    msg: err.message,
    navBlack: 'u-navbar-black navbar',
  });
};
const sendErrorForProd = (err, req, res) => {
  /////////////////////////////////////////
  ///////   ERROR IN OUR API

  if (req.originalUrl.startsWith('/api')) {
    // Operational, trusted error: send message to client

    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }
    // Programming error or unkown error: don´t leak error details

    // 1) Log error
    console.error('ERROR 😢', err);
    // 2) Send generic message

    return res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!',
      err,
    });
  }

  /////////////////////////////////////////
  ///////  ERROR IN OUR RENDERED WEBPAGE

  // A) - Operational, trusted error: send message to client

  if (err.isOperational) {
    return res.status(err.statusCode).render('error', {
      title: 'something went wrong',
      msg: err.message,
      navBlack: 'u-navbar-black navbar',
    });
  }

  // B) - Programming error or unkown error: don´t leak error details

  // 1) Log error
  console.error('ERROR 😢', err);
  // 2) Send generic message

  return res.status(err.statusCode).render('error', {
    title: 'something went very wrong! ',
    msg: 'Try again later!',
    navBlack: 'u-navbar-black navbar',
  });
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorForDev(err, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    sendErrorForProd(err, req, res);
  }
};
