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

var authRouter = require('./server/routers/auth_router');
var movieRouter = require('./server/routers/movie_router');
var userRouter = require('./server/routers/user_router');

if (isProduction) {
  // var bundle = require('./server/bundle.js');
  // bundle();
  app.use(express.static(publicPath));
}

var mongo = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/auth'
mongoose.connect(mongo);

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRouter);
app.use('/api/movies', movieRouter);

// name conflict !!!!!!!!!!!!!
app.use('/api/users', userRouter);

app.use(fallback('index.html', { root: publicPath }));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
