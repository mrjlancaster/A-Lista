const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// login handlers
router.post('/login', () => {});
router.get('/login', () => {});

// register handlers
router.post('/newUser', (req, res) => { // REGISTER POST REQUEST
	const { name, email, password } = req.body;
	const hashedPassword = bcrypt.hashSync(password, 10);

	// Check if user already exists in db
	User.findOne({ email })
		.then(user => {
			if (user) console.log('user already exists');

			// Create new user
			const newUser = new User({
				name: name,
				email: email,
				password: hashedPassword,
				date_created: Date.now()
			});

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

module.exports = router;
