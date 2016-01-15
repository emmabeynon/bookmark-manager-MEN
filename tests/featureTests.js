var chai = require('chai');
var expect = chai.expect;

// As a time-pressed user
// So that I can quickly go to web sites I regularly visit
// I would like to see a list of links on the homepage

describe('User Stories', function(){
  describe('Homepage', function() {
    it('displays a list of links', function(done) {
      browser
      .url('http://localhost:3000')
      .getText('body', function(err, text) {
        expect(text).to.equal('Bookmark Manager');
      })
      .call(done);
    });
  });
});
