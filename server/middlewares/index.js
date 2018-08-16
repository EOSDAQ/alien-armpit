const { env } = require('../config');

function middlewares(app) {
  if (env === 'local') {
    require('./wdm')(app);
  }
}

module.exports = middlewares;
