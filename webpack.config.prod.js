const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const devConfig = require('./webpack.config.dev');

const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin([
      'dist',
    ]),
    new CopyWebpackPlugin([
      {
        from: 'public/',
        to: '.',
      },
    ]),
    new CompressionWebpackPlugin({
      test: /\.js/,
      exclude: /\.js.map/,
    }),
  ],
};

module.exports = merge(devConfig, prodConfig);
