const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('./config');
const otpRoute = require('./router/otp');
const accountRoute = require('./router/account');

const app = express();
const { env } = config;
const staticPath = path.join(__dirname, `../${config.staticPath}`);

// webpack hot loading setup
if (env === 'local') {
  (() => {
    const webpack = require('webpack');
    const webpackConfig = require('../webpack.config.dev');
    const compiler = webpack(webpackConfig);

    app.use(require('webpack-dev-middleware')(compiler, {
      logLevel: 'warn',
      publicPath: webpackConfig.output.publicPath,
    }));

    app.use(require('webpack-hot-middleware')(compiler, {
      log: console.log,
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000,
    }));
  })();
}

// view engine setup
app.set('views', staticPath);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(bodyParser.json());
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static(staticPath));

app.use('/otp', otpRoute);
app.use('/account', accountRoute);
app.get('*', (req, res) => {
  res.render('index.html');
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(createError(err));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).send('error');
  console.log(err);
  // res.render('error');
});

module.exports = app;
