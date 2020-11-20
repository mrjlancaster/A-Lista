const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


const Guest = require('./models/Guest');
require('dotenv').config();

// render public folder
app.use(express.static('public'));

//routes
app.post('/guest-list', (req, res) => {
   
    console.log(req.body);

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

