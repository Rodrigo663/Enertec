const Request = require('../models/requestModel');
const appError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Email = require('../utils/email');
const APIFeatures = require('../utils/apiFeatures');
const Factory = require('./factory');

exports.getRequests = Factory.getAll(Request);
exports.getRequest = Factory.getOne(Request);
exports.updateRequest = Factory.updateOne(Request);
exports.deleteRequest = Factory.deleteOne(Request);
exports.addRequest = Factory.addOne(Request);



