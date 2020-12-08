const express = require('express');
const router = express.Router();

router.post('/login', () => {});
router.get('/login', () => {});

// register
router.post('/register', (req, res) => {
	console.log(req.body);
});
router.get('/register', () => {});
