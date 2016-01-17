var Link = require('../models/links.js');
var chai = require('chai');
var expect = chai.expect;
var DatabaseCleaner = require('database-cleaner');
var databaseCleaner = new DatabaseCleaner('mongodb');
var connect = require('mongodb').connect;

describe('Create Link', function() {
	var link;

	beforeEach(function() {
		link = new Link({
			title: 'Test Link',
			url: 'http://www.testlink.com',
		});
		link.save();
	});

	it('should have a title', function() {
		expect(link.title).to.equal('Test Link');
	});

	it('should have a URL', function() {
		expect(link.url).to.equal('http://www.testlink.com');
	});

	after(function() {
		connect('mongodb://localhost:27017/links', function(err, db) {
			databaseCleaner.clean(db, function() {
				console.log('cleaned up');
				db.close();
			});
		});
	});
});