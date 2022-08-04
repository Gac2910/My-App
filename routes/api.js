const express = require('express');
const router = express.Router();

// ----- Testing Ping -----
router.post('/ping', function(req, res) {
	if (req.body.ping) 
		res.status(200).send({ pong: true });
	else 
		res.status(404).send({ pong: false });
});

// ----- Mongo DB -----

// Get All Projects
let projects = []; // variable for cheap caching
router.post('/get-projects', function(req, res) {
	if (projects.length > 0) 
		return res.status(200).send(projects);

	_client.connect(err => { 
		if (err) throw err;

		_client.db(_database).collection('Projects').find({}).toArray((err, result) => {
			if (err) res.status(404).end();

			projects = [...result];
			res.status(200).send(result);
		});	
	});
});

module.exports = router;