const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotifySchema = new Schema({
	email: {
		type: String,
		required: true
	}
})

const Notify = mongoose.model('Notify', notifySchema);
module.exports = Notify;
