const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// REGISTER USER
router.post('/newUser', (req, res) => {
	const { name, email, password } = req.body;
	const hashedPassword = bcrypt.hashSync(password, 10);

	// Check if user already exists in db
	User.findOne({ email })
		.then(user => {
			// if user already exists, throw error
			if (user) console.log('user already exists');

			// if user doesn't exist, create new user
			const newUser = new User({
				name: name,
				email: email,
				password: hashedPassword,
				date_created: Date.now()
			});

			// insert new user to db
			newUser.save()
			.then(user => {
				jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 3600 }), (err, token) => {
					if (err) throw err;
					res.json({
						token: token,
						user: {
							name: user.name,
							email: user.email
						}
					})
				}
			})
		})
});

router.get('/register', () => { // REGISTER GET REQUEST

});

// LOGIN USER
router.post('/login', (req, res) => {
	const { userEmail, userPassword } = req.body;

	const hashUserPassword = bcrypt.hashSync(userPassword, 10);

	User.findOne({ email: userEmail })
		.then(user => {
			if (!user) console.log('user not found');
		})

});





router.get('/login', () => {});

// Logout user

module.exports = router;
