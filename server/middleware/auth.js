const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = (req, res, next) => {
	const token = req.header('x-auth-token');

	// check for token
	if (!token) res.status(401).json({ msg: 'no token. authorization denied.' });

	//verify token
	const decoded = jwt.verify(token, process.env.ACESS_TOKEN_SECRET)

}
