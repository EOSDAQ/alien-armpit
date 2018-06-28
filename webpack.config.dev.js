const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

const entry = [
  './js/app.js',
];

const output = {
  path: path.join(__dirname, '/dist'),
  filename: '[name].bundle.js',
};

const resolve = {
  extensions: ['.js', '.json', '.jsx'],
};

const rules = [
  {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    options: {
      presets: ['react'],
      plugins: ['emotion'],
    }
  },    
];


const plugins = [
  new webpack.optimize.ModuleConcatenationPlugin(),
  new htmlWebpackPlugin({
    template: 'static/index.html',
    inject: true,
  }),
];

module.exports = {
  mode: 'development',
  entry,
  output,
  resolve,  
  plugins,
  serve: {
    content: 'public',
    hot: true,
    port: 3001,
  },
  module: {
    rules,
  },
};
