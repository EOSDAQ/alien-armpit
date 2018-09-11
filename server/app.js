require('express-async-errors');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const addRequestId = require('express-request-id')();
const config = require('./config');
const middlewares = require('./middlewares');
const router = require('./routers/router');
const logger = require('./modules/logger');

const app = express();
const { env } = config;
app.disable('x-powered-by');
app.use(addRequestId);
app.use(morgan('combined', {
  stream: {
    write(message) {
      // except for static resource request
      if (/\/static/gi.test(message)) {
        return;
      }
      logger.info(message);
    },
  },
}));
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
    // 'x-dns-prefetch-control': '',
  });
  req.locals = { id: req.id };
  next();
});
const staticPath = path.join(__dirname, `../${config.staticPath}`);
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

  res.status(result.status || 500).send(result);
});

module.exports = app;
