const uuidv4 = require('uuid/v4');
const csp = require('helmet-csp');
const config = require('../config');

const generateUuid = (req, res, next) => {
  res.locals.nonce = uuidv4();
  next();
};

const cspDirectives = {
  defaultSrc: ["'self'"],
  connectSrc: ["'self'", '*.tradingview.com', '*.ap-northeast-2.compute.amazonaws.com:18890'],
  baseUri: ["'self'"],
  frameSrc: ["'self'"],
  // onlyForProduction
  blockAllMixedContent: config.env === 'production',
  childSrc: ["'self'", '*.s3.ap-northeast-2.amazonaws.com'],
  fontSrc: ["'self'", 'data:', '*.googleapis.com', '*.gstatic.com'],
  styleSrc: ["'self'", "'unsafe-inline'", '*.googleapis.com'],
  scriptSrc: ["'self'", "'unsafe-inline'", '*.googleapis.com', '*.google-analytics.com',
    '*.googletagmanager.com', 'unpkg.com', (req, res) => (`'nonce-${res.locals.nonce}'`)],
  imgSrc: ["'self'", '*.google-analytics.com', '*.googleapis.com', '*.gstatic.com',
    'static.upbit.com', // TODO remove
  ],
};

const cspMiddleware = csp({
  directives: cspDirectives,
});

module.exports = {
  generateUuid,
  cspMiddleware,
};
