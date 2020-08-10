const router = require('express').Router();
const Member = require('../models/member.model');

router.route('/type=:type').get((req, res) => {
	Member.find(
		{
			'type': req.params.type
		}
	)
	.then(members => res.json(members))
	.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;


