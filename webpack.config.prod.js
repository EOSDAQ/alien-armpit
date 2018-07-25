const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const devConfig = require('./webpack.config.dev');

const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  externals: '',
  plugins: [
    new CleanWebpackPlugin([
      'dist',
    ]),
    new CopyWebpackPlugin([
      {
        from: '../public/',
        to: '.',
      },
    ]),
  ],
};

const merged = merge(devConfig, prodConfig);
module.exports = merged;
