const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const Guest = require('./models/Guest');
require('dotenv').config();

// set view engine
app.set('view engine', 'ejs');

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// render public folder
// app.use(express.static('public'));

//routes
app.post('/guest-list', (req, res) => {
    const guest = new Guest({
        name: req.body.name,
    })

    guest.save(function(error) {
        if (error) {
            console.log(error);
        }
    })
   
    res.send('new guest added');
})

app.get('/', (req, res) => {
    res.render('home');
})

// connect database
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to DB successfully!');

    // run localhost
    app.listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}`);
    })
})

// Guest.find(function (err, guests) {
//     if (err) return console.error(err);
//     console.log(guests);
//   })
