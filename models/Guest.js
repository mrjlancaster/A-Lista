const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

const Guest = mongoose.model('guests', guestSchema);

module.exports = Guest;