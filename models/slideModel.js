const mongoose = require('mongoose');

const slideSchema = new mongoose.Schema( {
    url: { 
        type: String,
        required: [true, 'O slide precisa do url!']
    }

});



const Slide = mongoose.model('Slide', slideSchema) // Good Practice: To put the model Uppercase

module.exports = Slide;

