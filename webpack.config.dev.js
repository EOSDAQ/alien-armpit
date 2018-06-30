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
    exclude: [path.resolve(__dirname, 'node_modules')]
  },
  {
    test: /\.svg$/,
    use: [
      { loader: 'babel-loader' },
      { loader: 'react-svg-loader' }
    ]
  }
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
    contentPath: __dirname,
  },
  module: {
    rules,
  },
};
