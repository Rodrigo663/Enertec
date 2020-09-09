const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema( {
    nome: {
      type: String,
      required: [true, 'O usuário precisa de um nome!'],
    },
    sobrenome: {
        type: String,
        required: [true, 'O usuário precisa de um sobrenome']
    },
    email: {
      type: String,
      required: [true, 'O usuário precisa de um email!']

    },
    número: {
        type:String, 
        required: [true, 'O usuário precisa de um número!'],
    },
    date: {
      type: Date,
      default: Date.now().toString()

    },

    interesse: {
        type: String,
        enum: ['painel-solar', 'automação', 'ambos'],
        required: [true, 'O usuário precisa de um interesse']
  },


} )
const Request = mongoose.model('Request', requestSchema) // Good Practice: To put the model Uppercase

module.exports = Request;
// {
//   "date": "2020-09-03T13:06:07.867+00:00",
//   "nome":"Rodrigo", 
//   "sobrenome":"Schroeder",
//   "email":"digoschroeder1@gmail.com",
//   "número":"(+49) 984317813",
//   "interesse":"ambos"

// }