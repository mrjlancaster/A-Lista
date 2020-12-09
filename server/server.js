const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const Guest = require('./models/Guest');
const db = mongoose.connection;
require('dotenv').config();
const jwt = require('jsonwebtoken');

// routes
const routes = require('./routes/authRoutes');

// set view engine
app.set('view engine', 'ejs');

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static('public')); // render public folder



app.get('/test', (req, res) => {
	res.send('testing')
})

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

app.post('/event', (req, res) => {
    db.createCollection(req.body.eventName);
    res.redirect('my-list')
})


// render home view
app.get('/', (req, res) => {
    res.render('home');
})

// render guest list view
app.get('/my-list', (req, res) => {
    res.render('guestList', {party: 'my party'});
})

app.use('/api', routes);


// connect server and database
mongoose.set('useCreateIndex', true); // remove "ensureIndex()"" deprecated warning
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
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


// Guest.insertMany([
//     {name: "Mary Jane"},
//     {name: "Mel Gibson"},
//     {name: "Jennie Morrison"}
// ])


// const newUser = new User({
// 	name: 'Jon Smith',
// 	email: 'smith@test.com',
// 	password: '0000'
// })

// newUser.save();
