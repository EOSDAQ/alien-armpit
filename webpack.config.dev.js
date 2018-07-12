const path = require('path');
const webpack = require('webpack');
const connect = require('koa-connect');
const history = require('connect-history-api-fallback');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = [
  './js/app.jsx',
];

const output = {
  path: path.join(__dirname, '/dist'),
  filename: '[name].bundle.js',
  chunkFilename: '[name].[chunkhash].js',
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

const devtool = 'cheap-module-eval-source-map';

const plugins = [
  new webpack.optimize.ModuleConcatenationPlugin(),
  new HtmlWebpackPlugin({
    template: 'static/index.html',
    inject: true,
  }),
];

const optimization = {
  splitChunks: {
    chunks: 'async',
    minSize: 30000,
    minChunks: 1,
    name: true,
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true,
      },
    },
  },
};

module.exports = {
  mode: 'development',
  entry,
  output,
  resolve,
  plugins,
  serve: {
    content: 'public',
    port: 3001,
    contentPath: __dirname,
    add: (app) => {
      app.use(connect(history()));
    },
  },
  optimization,
  devtool,
  module: {
    rules,
  },
};
