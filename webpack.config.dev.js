const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./server/config');

const entry = [
  './app.jsx',
];

const context = path.resolve(__dirname, 'client');
const nodeModules = path.resolve(__dirname, 'node_modules');

const output = {
  path: path.join(__dirname, '/public'),
  publicPath: '/static/',
  filename: '[name].bundle.js',
  chunkFilename: '[name].js',
  // for worker-loader issue
  globalObject: 'this',
};

const resolve = {
  extensions: ['.js', '.json', '.jsx'],
  modules: [path.resolve(context), nodeModules],
};

const rules = [
  {
    test: /\.worker\.js$/,
    use: [
      'worker-loader',
    ],
  },
  {
    test: /\.(js|jsx)$/,
    use: [
      'thread-loader',
      'cache-loader',
      'babel-loader',
    ],
    include: [context],
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

const devtool = 'cheap-source-map';

const plugins = [
  new webpack.optimize.ModuleConcatenationPlugin(),
  new HtmlWebpackPlugin({
    template: 'template/template.html',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
    },
    production: process.argv.indexOf('-p') >= 0,
  }),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
    gConfig: JSON.stringify(config),
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
  externals,
  optimization,
  devtool,
  module: {
    rules,
  },
};
