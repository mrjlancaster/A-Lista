const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../models/User'); // user model

router.post('/register', (req, res) => {
	const { name, email, password  } = req.body;

	if (!name || !email || !password) {
		return res.status(400).json({ msg: 'Please enter all fields' })
	}

	// check if user already exists
	User.findOne({ email })
		.then(user => {
			if (user) return res.status(400).json({ msg: 'User already exists' });

			const newUser = new User({
				name,
				email,
				password
			})

			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) throw err;
					newUser.password = hash;
					newUser.save()
				})
			})
		})

})
