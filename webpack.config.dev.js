const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = [
  'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
  './js/app.jsx',
];

const context = path.resolve(__dirname, 'public');
const nodeModules = path.resolve(__dirname, 'node_modules');

const output = {
  path: path.join(__dirname, '/public'),
  publicPath: '/static/',
  filename: '[name].bundle.js',
  chunkFilename: '[name].js',
};

const resolve = {
  extensions: ['.js', '.json', '.jsx'],
  modules: [path.resolve(context, 'js'), nodeModules],
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
    template: 'template/template.html',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
    },
    production: process.argv.indexOf('-p') >= 0,
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
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
