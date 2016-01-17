var express = require('express');
var path = require('path');
var routes = require('./routes/index');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.set('view engine', 'jade');

module.exports = app;
