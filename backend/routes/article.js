const router = require('express').Router();
let Article = require('../models/article.model');

router.route('/').get((req, res) => {
	Article.find()
	.then(article => res.json(article))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/samples/count=:count').get((req, res) => {
  console.log(req.params)
  Article.aggregate([{$sample: {size: parseInt(req.params.count)}}])
	.then(article => res.json(article))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/type/type=:type&count=:count').get((req, res) => {
	console.log(req.params)

	Article.find(
		{
			[req.params.type] : true
		},
		null,
		{ 
			limit : parseInt( req.params.count ),
			sort : { 'date' : 'desc' } 
		}
	)
	.then(article => res.json(article))
	.catch(err => res.status(400).json('Error: ' + err));
})

router.route('/id/:id').get((req, res) => {
  console.log(req.params)

  Article.findById(req.params.id)
	  .then(article => res.json(article))
	  .catch(err => res.status(400).json('Error: ' + err));

});






module.exports = router;


