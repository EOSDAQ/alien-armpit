const winston = require('winston');
const config = require('../config');

const { createLogger, format } = winston;
const { logLevel } = config;

const logger = createLogger({
  level: logLevel,
  format: format.combine(
    format.splat(),
    format.simple(),
  ),
  transports: [
    new winston.transports.Console(),
  ],
});

module.exports = logger;
