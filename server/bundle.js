var path = require('path');
var fs = require('fs');
var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var webpackConfig = require('./../webpack.config.js');
var mainPath = path.resolve(__dirname, '..', 'app', 'main.js');

module.exports = () => {
  // var bundleStart = null;
  var compiler = Webpack(webpackConfig);

  compiler.plugin('compile', () => {
    console.log('Bundling...');
    bundleStart = Date.now();
  });

  compiler.plugin('done', () => {
    console.log(`Bundled in ${Date.now() - bundleStart} + ms!`);
  });

  // var bundler = new WebpackDevServer(compiler, {
  //   publicPath: '/build/',
  //
  //   hot: true,
  //
  //   quiet: false,
  //   noInfo: true,
  //   stats: {
  //     colors: true
  //   },
  //
  //   headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST, GET, OPTIONS" },
  // });
  //
  // bundler.listen(8080, 'localhost', () => {
  //   console.log('Bundling project, please wait...');
  // });
}
