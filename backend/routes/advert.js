const router = require('express').Router();
let Advert = require('../models/advert.model');

router.route('/').get((req, res) => {
	Advert.find()
	.then(advert => res.json(advert))
	.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;


