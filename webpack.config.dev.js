const path = require('path');
const webpack = require('webpack');
const connect = require('koa-connect');
const history = require('connect-history-api-fallback');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = [
  './app.jsx',
];

const context = path.resolve(__dirname, 'js');
const nodeModules = path.resolve(__dirname, 'node_modules');

const output = {
  path: path.join(__dirname, '/dist'),
  filename: '[name].[hash].bundle.js',
  chunkFilename: '[name].[chunkhash].js',
};

const resolve = {
  extensions: ['.js', '.json', '.jsx'],
  modules: [context, nodeModules],
};

const rules = [
  {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    exclude: [nodeModules],
  },
  {
    test: /\.svg$/,
    use: [
      { loader: 'babel-loader' },
      { loader: 'react-svg-loader' },
    ],
  },
];

const devtool = 'cheap-module-eval-source-map';

const plugins = [
  new webpack.optimize.ModuleConcatenationPlugin(),
  new HtmlWebpackPlugin({
    template: 'app.html',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
    },
    production: process.argv.indexOf('-p') >= 0,
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

const externals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

module.exports = {
  mode: 'development',
  context,
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
  externals,
  optimization,
  devtool,
  module: {
    rules,
  },
};
