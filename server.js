const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const router = require('./server/router.js');

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;
const publicPath = path.resolve(__dirname, 'public');

const mongo = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/auth'
mongoose.connect(mongo);

app.use(express.static(publicPath));
app.use(bodyParser.json());

router(app);

if (!isProduction) {
  var bundle = require('./server/bundle.js');
  bundle();

  app.all('/build/*', (req, res) => {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    });
  });
}

proxy.on('error', (e) => {
  console.log('Could not connect to proxy, please try again');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
