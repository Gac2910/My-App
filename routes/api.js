const express = require('express');
const router = express.Router();

router.post('/ping', function(req, res) {
	if (req.body.ping) 
		return res.status(200).json({ pong: true });
	else 
		return res.status(404).json({ pong: false });
});

module.exports = router;