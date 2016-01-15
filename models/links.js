var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/links');
mongoose.connection.on('open', function() {
	console.log('Mongoose connected.');
});

var linkSchema = mongoose.Schema({
	title: { type: String },
	url: { type: String }
});

module.exports = mongoose.model('Link', linkSchema);