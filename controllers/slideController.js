const Slide = require('../models/slideModel');
const Factory = require('./factory');

exports.getSlides = Factory.getAll(Slide);
exports.getSlide = Factory.getOne(Slide);
exports.updateSlide = Factory.updateOne(Slide);
exports.deleteSlide = Factory.deleteOne(Slide);
exports.addSlide = Factory.addOne(Slide);
