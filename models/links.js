var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bookmark_manager');
mongoose.connection.on('open', function() {
	console.log('Mongoose connected.');
});

var linkSchema = mongoose.Schema({
	title: { type: String },
	url: { type: String },
	timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Link', linkSchema);
