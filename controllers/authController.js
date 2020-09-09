const appError = require('../utils/appError');

exports.checkKey = (req, res, next) => {

     // 1) Getting the token and check if it´s there
  if ( 
    req.headers.password &&
    req.headers.password === 'MarkP1ler!'
  ) {
      next();
      } else {
        return next(
            new appError('Você não tem autorização para acessar esse URL! Sinto muito!', 401)
          );
      }
 

   // next();
}