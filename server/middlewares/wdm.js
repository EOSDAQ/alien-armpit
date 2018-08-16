const webpack = require('webpack');
const config = require('../../webpack.config.dev');
const hotClient = require('webpack-hot-client');
const webpackDevMiddleware = require('webpack-dev-middleware');
const compiler = webpack(config);

const { server } = hotClient(
  compiler,
  {
    hot: true,
    reload: false,
  },
);

function wdm(app) {
  app.use(webpackDevMiddleware(
    compiler,
    {
      logLevel: 'warn',
      writeToDisk: path => /index.html$/.test(path),
      publicPath: config.output.publicPath,
    },
  ));
}

module.exports = wdm;
