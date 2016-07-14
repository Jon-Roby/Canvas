var path = require('path');
var buildPath = path.resolve(__dirname, 'public', 'build');
var indexPath = path.resolve(__dirname, 'public/src/index.js');

var config = {
  devtool: 'source-map',
  entry: './public/src/index.js',
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};

module.exports = config;
