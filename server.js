const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();

// render public folder
app.use(express.static('public'));

// connect database
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to DB successfully!');

    // run localhost
    app.listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}`);
    })
})

