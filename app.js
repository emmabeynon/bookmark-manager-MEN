var express = require('express');
var path = require('path');
var routes = require('./routes/index');
var app = express();

app.use('/', routes);
app.set('view engine', 'jade');
module.exports = app;
