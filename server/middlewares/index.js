const { env } = require('../config');

function middlewares(app) {
  if (env === 'local') {
    require('./wdm')(app);
  } else {
    require('./renderer')(app);
  }
}

module.exports = middlewares;
