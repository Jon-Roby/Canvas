var path = require('path');
var webpack = require('webpack');
var buildPath = path.resolve(__dirname, 'public', 'build');
var indexPath = path.resolve(__dirname, 'public/src/index.js');

module.exports = {
  entry: [
    './public/src/index.js'
  ],
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
  devServer: {
    historyApiFallback: true,
    contentBase: './public'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ]
};

// var Webpack = require('webpack');
// var path = require('path');
// var nodeModulesPath = path.resolve(__dirname, 'node_modules');
// var buildPath = path.resolve(__dirname, 'public', 'build');
// var indexPath = path.resolve(__dirname, 'public/src/index.js');
//
// var config = {
//   devtool: 'eval',
//   entry: [
//     indexPath
//   ],
//   output: {
//     path: buildPath,
//     filename: 'bundle.js',
//     publicPath: '/build/'
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         loader: 'babel-loader',
//         exclude: [nodeModulesPath]
//       },
//       {
//         test: /\.css$/,
//         loader: 'style!css'
//       }
//     ]
//   },
//   plugins: [new Webpack.HotModuleReplacementPlugin()],
//   devServer: {
//     historyApiFallback: true,
//   }
// };
//
// module.exports = config;
