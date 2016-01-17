var express = require('express');
var router = express.Router();
var Link = require('../models/links.js');

// var bodyParser = require('body-parser');

router.get('/', function(req, res) {
  Link.find({}, {}, { sort: {'timestamp': -1} }, function(err, links) {
    if(err) throw err;
    else {
      res.render('index', {links: links});
    }
  });
});

router.post('/links', function(req, res) {
	var newLink = new Link({
		title: req.body.title,
		url: req.body.url
	});
	newLink.save(function(err){
		if (err) { throw err; }
		res.redirect('/');
	});
});

module.exports = router;
