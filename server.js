const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const Guest = require('./models/Guest');
require('dotenv').config();

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// render public folder
app.use(express.static('public'));

//routes
app.post('/guest-list', (req, res) => {
    const guest = new Guest({
        name: req.body.name
    })

    guest.save()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })
   
    res.send('new guest added');
})


// connect database
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to DB successfully!');

    // run localhost
    app.listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}`);
    })
})