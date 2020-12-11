const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const userSchema = new Schema({
	name: {
	type: String,
	required: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
		validate: isEmail
	},
	password: {
		type: String,
		required: true,
		minLength: 6
	},
	dateCreated: {
		type: Date,
		default: Date.now
	}
});

const User = mongoose.model('User', userSchema);

module.exports = User;
