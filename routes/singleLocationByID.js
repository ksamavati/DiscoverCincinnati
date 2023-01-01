const router = require('express').Router();
let Location = require('../schemas/location.model');

router.route('/:locID').get((req, res) => { // ':catergory' assigns any text after it in the URL to req.params.catergory
	Location.find({ category: req.params.locID })
		.then(locations => res.json(locations))
		.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;