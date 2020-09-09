const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    nome: {
      type: String,
      required: [true, 'O usuário precisa de um nome!'],
    },
  
    título: {
      type: String,
      required: [true, 'O usuário precisa de um email!']

    },
    principal: {
        type: Boolean,
        default: false

    },
    descrição: {
        type:String, 
        required: [true, 'O usuário precisa de uma descrição!'],
    },
   


}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }  );
userSchema.virtual('photo').get(function() {
    const last = this.nome.split(' ')[1];
    return `${this.nome.split(' ')[0].toLowerCase()}` +  `${last.substr(0, 3).toLowerCase()}` + `.jpg`;

});
const User = mongoose.model('User', userSchema) // Good Practice: To put the model Uppercase

module.exports = User;
