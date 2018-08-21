const webpack = require('webpack');
const config = require('../../webpack.config.dev');
const hotClient = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const compiler = webpack(config);

function wdm(app) {
  const instance = webpackDevMiddleware(
    compiler,
    {
      logLevel: 'warn',
      writeToDisk: path => /index.html$/.test(path),
      publicPath: config.output.publicPath,
    },
  );

  app.use(instance);
  app.use(hotClient(compiler));
  require('./renderer')(app);
}

module.exports = wdm;
