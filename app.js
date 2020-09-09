const express = require('express');
const path = require('path');
const viewRouter = require('./routes/viewRoutes');
const requestRouter = require('./routes/requestRoutes');
const userRouter = require('./routes/userRoutes');
const slidesRouter = require('./routes/slidesRoutes');
const AppError = require('./utils/appError');
const errorThrower = require('./controllers/errorController');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '10kb' }));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// Data sanatization against NoSQL query injection
app.use(mongoSanitize());
// Data Sanatization against XSS
app.use(xss());
// Prevent Parameter Pollution
app.use(
  hpp({
    whitelist: ['nome', 'interesse'],
  })
);

app.use('/', viewRouter);
app.use('/api/v1/requests', requestRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/slides', slidesRouter);

app.all('*', (req, res, next) => {
  return next(
    new AppError(`Não encontramos ${req.originalUrl} nesse servidor`, 404)
  );
});

app.use(errorThrower);
module.exports = app;
