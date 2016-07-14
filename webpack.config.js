var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var indexPath = path.resolve(__dirname, 'public/src/index.js');

var config = {
  devtool: 'eval',
  entry: [
    indexPath
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [nodeModulesPath]
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()],
};

module.exports = config;
