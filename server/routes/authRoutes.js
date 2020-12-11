const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// login handlers
router.post('/login', () => {});
router.get('/login', () => {});

// register handlers
router.post('/newUser', (req, res) => { // REGISTER POST REQUEST
	const { name, email } = req.body;
	const hashedPassword = bcrypt.hashSync(req.body.password, 10);

	// Check if user already exists in db
	User.findOne({ email }, function(err, user) {
		if (err) {
			console.log(err);
		} else if (user) {
			console.log('user already exists');
		} else {
			// Create new user
			const newUser = new User({
				name: name,
				email: email,
				password: hashedPassword,
				dateCreated: Date.now()
			});

			newUser.save()
			.then(res => console.log(res))
			.catch(err => console.log(err))
		}
	})
});

router.get('/register', () => { // REGISTER GET REQUEST

});

module.exports = router;
