const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/apiFeatures');

exports.getAll = Model => catchAsync(async(req, res, next) => {
    const features = new APIFeatures(Model.find(),req.query)
    .filter()
    .sort()
    .field()
    .paginate();
    const data = await features.query;
    res.status(200).json({
        status: 'success',
        results: data.length,
        data: {
            data
        }

    })
});

exports.getOne = Model => catchAsync(async(req, res, next) => {
    const data =await Model.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            data
        }
    })
});

exports.updateOne= Model => catchAsync(async(req, res, next) => {
    const data =await Model.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true,
        new: true
    });
    res.status(200).json({
        status: 'success',
        data: {
            data
        }
    })

    

});
exports.deleteOne= Model => catchAsync(async(req, res, next) => {
    await Model.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null
    })


});
exports.addOne = Model => catchAsync(async(req, res, next) => {
    const data = await Model.create(req.body);

    res.status(201).json({
        status: 'success',
   
        data: {
            data
        }

    })
})