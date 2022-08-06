const express = require('express');
const router = express.Router();
const requestIp = require('request-ip');

// ----- Testing Ping -----
router.post('/ping', function(req, res) {
	try {
		if (req.body.request === 'ping') {
			// if this is the first ping on page load
			if (req.body.initialPing) {
				// get ip and try to find ip in Visitors
				let ip = requestIp.getClientIp(req);
				_client.connect(err => { 
					if (err) throw err;
					_client.db(_database).collection('Visitors').find({ ip }).toArray((err, result) => {
						if (err) res.status(404).end();
						// if ip is not found, save it in Visitors
						if (result.length === 0) {
							_client.db(_database).collection('Visitors').insertOne({ ip, date: new Date() }, (err, result) => {
								if (err) res.status(404).end();
								res.status(200).send({ response: 'pong', newUser: true });
							});
						}
						else {
							res.status(200).send({ response: 'pong', newUser: false });
						}
					});
				});
			}
			else {
				res.status(200).send({ response: 'pong' });
			}
		}
		else {
			res.status(404).end();
		}
	}
	catch (err) {
		console.log(err);
		res.status(404).send(err);
	}
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