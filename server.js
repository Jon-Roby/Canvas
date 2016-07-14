var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var fallback = require('express-history-api-fallback');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var proxy = httpProxy.createProxyServer();
var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, 'public');
var router = require('./server/router');

mongoose.connect('mongodb://localhost:auth/auth');

app.use(express.static(publicPath));
app.use(cors());
app.use(bodyParser.json());
router(app);

// app.post('/api/users/signin', function(req, res) {
//   res.send({ message: 'yo' });
// });

// if (!isProduction) {
//   var bundle = require('./server/bundle.js');
//   bundle();
//
//   // app.all('/build/*', (req, res) => {
//   //   proxy.web(req, res, {
//   //     target: 'http://localhost:8080'
//   //   });
//   // });
// }

var bundle = require('./server/bundle.js');
bundle();

// Fallback so it doesn't hit express
app.use(fallback('index.html', { root: publicPath }));

// proxy.on('error', (e) => {
//   console.log('Could not connect to proxy, please try again');
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
