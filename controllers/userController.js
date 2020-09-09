const User = require('../models/userModel');
const appError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Email = require('../utils/email');
const APIFeatures = require('../utils/apiFeatures');

const Factory = require('./factory');

exports.getUsers = Factory.getAll(User);
exports.getUser = Factory.getOne(User);
exports.updateUser = Factory.updateOne(User);
exports.deleteUser = Factory.deleteOne(User);
exports.addUser = Factory.addOne(User);

exports.getMain = catchAsync(async(req,res) => {
    const data =  await User.find({principal: true});

    res.status(200).json({
        status: 'success',
        results: data.length,
        data: {
            data
        }
    })
})


