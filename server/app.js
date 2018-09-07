require('express-async-errors');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const logger = require('morgan');
const config = require('./config');
const middlewares = require('./middlewares');

const router = require('./routers/router');

const app = express();
const { env } = config;
const staticPath = path.join(__dirname, `../${config.staticPath}`);
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use((req, res, next) => {
  res.set({
    'X-Frame-Options': 'SAMEORIGIN',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'no-referrer',
    'X-Download-Options': 'noopen',
    'X-Permitted-Cross-Domain-Policies': 'none',
    'Strict-Transport-Security': 'max-age=631152000; includeSubdomains',
    // 'Expect-Ct': '"max-age=86400; report-uri=https://report-uri.io/example-ct"',
    // 'Expect-Staple': '"max-age=31536000; report-uri=https://report-uri.io/r/default/staple/reportOnly; includeSubDomains; preload"',
    // 'X-Request-Id': '',
    // 'x-dns-prefetch-control': '',
  });
  req.locals = {};
  next();
});
app.use('/static', express.static(staticPath));
app.use('/api', router);
middlewares(app);

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;

  const result = {
    status: err.status,
    data: {
      success: false,
      name: err.name,
      resultMsg: err.message,
      resultCode: err.code,
    },
  };

  if (env !== 'prod') {
    console.log('\n');
    console.log('ERROR START=============================');
    console.log(`* Url: ${req.protocol}//${req.get('host')}${req.originalUrl}`);
    console.log(`* Message: ${result.data.resultMsg}`);
    console.log(`* Status: ${result.status}`);
    console.log(`* resultCode: ${result.data.code}`);
    console.log(`* Stack: ${err.stack}`);
    console.log('ERROR END=============================');
    console.log('\n');
  }

  res.status(result.status).send(result);
});

module.exports = app;
