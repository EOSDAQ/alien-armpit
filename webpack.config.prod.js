const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
  ],
};

module.exports = merge(devConfig, prodConfig);
