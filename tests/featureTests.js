var chai = require('chai');
var expect = chai.expect;
var DatabaseCleaner = require('database-cleaner');
var databaseCleaner = new DatabaseCleaner('mongodb');
var connect = require('mongodb').connect;

describe('User Stories', function(){
  describe('Homepage', function() {
    // As a time-pressed user
    // So that I can quickly go to web sites I regularly visit
    // I would like to see a list of links on the homepage
    it('displays a list of links', function(done) {
      browser
      .url('http://localhost:3000')
      .getText('body', function(err, text) {
        expect(text).to.include('My Links');
      })
      .call(done);
    });

    // As a time-pressed user
    // So that I can save a website
    // I would like to add the site's address and title to my bookmark manager
    it('allows user to create a link which can be viewed on the homepage',
     function(done) {
      browser
      .url('http://localhost:3000')
      .setValue('#link-title', 'Link 2')
      .setValue('#link-url', 'http://www.link2.com')
      .click('#submit')
      .getText('body', function(err, text) {
        expect(text).to.include('Link 2: http://www.link2.com');
      })
      .call(done);
    });
    // As a time-pressed user
    // So that I can quickly find web sites I recently bookmarked
    // I would like to see links in descending chronological order
    it('displays links in descending chronological order', function(done) {
      browser
      .url('http://localhost:3000')
      .setValue('#link-title', 'First Link')
      .setValue('#link-url', 'http://www.firstlink.com')
      .click('#submit')
      .setValue('#link-title', 'Second Link')
      .setValue('#link-url', 'http://www.secondlink.com')
      .click('#submit')
      .getText('body', function(err, text) {
        expect(text).to.include('Second Link: http://www.secondlink.com\n' +
          'First Link: http://www.firstlink.com');
      })
      .call(done);
    });

    // As a time-pressed user
    // So that I can organise my many links into different categories for ease of search
    // I would like to add tags to the links in my bookmark manager
    xit('allows user to add tags to links', function() {

    });

    // As a time-pressed user
    // So that I can quickly find links on a particular topic
    // I would like to filter links by tag
    xit('allows user to filter links by tag', function() {

    });

    after(function() {
  		connect('mongodb://localhost:27017/bookmark_manager', function(err, db) {
  			databaseCleaner.clean(db, function() {
  				console.log('cleaned up');
  				db.close();
  			});
  		});
  	});
  });
});
