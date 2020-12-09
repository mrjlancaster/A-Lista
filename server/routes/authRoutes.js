const express = require('express');
const router = express.Router();
const User = require('../models/User');

// login handlers
router.post('/login', () => {});
router.get('/login', () => {});

// register handlers
router.post('/newUser', (req, res) => { // REGISTER POST REQUEST
	const newUser = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	});

	newUser.save()
		.then(res => console.log(res))
		.catch(err => console.log(err))
});

router.get('/register', () => { // REGISTER GET REQUEST

});

module.exports = router;
