var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	content: {
		type: String,
		required: true
	},
	complete: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('ListItem', schema);