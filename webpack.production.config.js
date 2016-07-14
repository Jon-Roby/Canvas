var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var indexPath = path.resolve(__dirname, 'public/src/index.js');

var config = {
  devtool: 'source-map',
  entry: indexPath,
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [nodeModulesPath]
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
};

module.exports = config;
