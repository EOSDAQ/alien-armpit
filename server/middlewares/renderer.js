const path = require('path');
const config = require('../config');

function renderer(app) {
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(
      config.rootPath,
      config.staticPath.slice(1),
      'index.html',
    ));
  });
}

module.exports = renderer;
