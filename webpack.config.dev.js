const path = require('path');
const webpack = require('webpack');

const entry = [
  './js/main/App.js',
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
];

module.exports = {
  mode: 'development',
  entry,
  output,
  resolve,  
  plugins,
  module: {
    rules,
  },
};
