// third party modules
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// my module
var loader = require('./lib/loader');
var error = loader.loadModule('error');

// load routes
var routes = loader.loadRoute('index');
var users = loader.loadRoute('users');

// load middleware
var header = loader.loadMiddleware('header');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// third party modules setup
app.use(favicon(__dirname + '/public/src/img/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(header());

// routes setup
app.use('/', routes);
app.use('/users', users);

// error setup
error.handlers(app);

module.exports = app;
