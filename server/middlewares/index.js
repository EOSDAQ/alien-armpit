const { env } = require('../config');

function middlewares(app) {
  if (env === 'devel') {
    require('./wdm')(app);
  } else {
    require('./renderer')(app);
  }
}

module.exports = middlewares;
