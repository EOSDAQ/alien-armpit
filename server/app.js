const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('./config');
const otpRoute = require('./router/otp');
const accountRoute = require('./router/account');
const middlewares = require('./middlewares');

const app = express();
const { env } = config;
const staticPath = path.join(__dirname, `../${config.staticPath}`);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/static', express.static(staticPath));
app.use('/otp', otpRoute);
app.use('/account', accountRoute);

middlewares(app);

// catch 404 and forward to error handler
// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(createError(err));
// });

// // error handler
// app.use((err, req, res, next) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500).send('error');
//   console.log(err);
//   // res.render('error');
// });

module.exports = app;
