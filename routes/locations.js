const router = require('express').Router();
let Location = require('../schemas/location.model');

router.route('/').get((req, res) => {
	Location.find()
		.then(locations => res.json(locations))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:category').get((req, res) => { // ':catergory' assigns any text after it in the URL to req.params.catergory
	Location.find({ category: req.params.category })
		.then(locations => res.json(locations))
		.catch(err => res.status(400).json('Error: ' + err));
});

 router.route('/id/:id').get((req, res) => { // ':catergory' assigns any text after it in the URL to req.params.catergory
 	Location.find({ category: req.params.id })
 		.then(locations => res.json(locations))
 		.catch(err => res.status(400).json('Error: ' + err));
 });

module.exports = router;