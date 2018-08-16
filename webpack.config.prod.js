const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const devConfig = require('./webpack.config.dev');

const prodConfig = {
  entry: [
    'app.jsx',
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[chunkhash].js',
  },
  mode: 'production',
  devtool: '',
  externals: '',
  plugins: [
    new CleanWebpackPlugin([
      'dist',
    ]),
    new CopyWebpackPlugin([
      {
        from: '../public/',
        to: '.',
        // ignore: ['**/*.js'],
      },
    ]),
  ],
};

const merged = merge.strategy({ entry: 'replace' })(devConfig, prodConfig);
module.exports = merged;
