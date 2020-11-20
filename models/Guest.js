const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestSchema = new Schema({
    name: String
});

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;