const router = require('express').Router();
let Minute = require('../models/minute.model');

router.route('/').get((req, res) => {
	Minute.find()
	.then(minute => res.json(minute))
	.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;


