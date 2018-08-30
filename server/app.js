const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const awsParamStore = require('aws-param-store');
const config = require('./config');
const middlewares = require('./middlewares');

const router = require('./routers/router');

const app = express();
// const { env } = config;
const staticPath = path.join(__dirname, `../${config.staticPath}`);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/static', express.static(staticPath));
app.use('/api', router);


middlewares(app);

awsParamStore.getParameter('/eosdaq/devel/burgundy_api', {
  region: 'ap-northeast-2',
}).then((parameters) => {
  // console.log('AWS PARAM STORE GET SUCCESS !!!!!!!!!!!!!!')
  // console.log(parameters);
}).catch((err) => {
  // console.log('AWS PARAM STORE GET FAIL !!!!!!!!!!!!!!')
  // console.log(err);
});


// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(createError(err));
// });

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500).send({
    success: false,
    name: err.name,
    resultMsg: err.message,
    resultCode: err.code,
  });
});

module.exports = app;
