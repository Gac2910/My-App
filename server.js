// ----- initialize express -----
const express = require('express');
const app = express();

// ----- initialize dependencies and middleware -----
// dotenv
require('dotenv').config();

// mongoDB
const { MongoClient } = require('mongodb');
const URI = process.env.URI;
global._database = process.env.DB;
global._client = new MongoClient(URI, { useUnifiedTopology: true, sslValidate: false });

// morgan
const morgan = require('morgan');
app.use(morgan('dev'));

// json parser
app.use(express.json());

// ----- initialize port -----
function normalizePort(val) {
	const port = parseInt(val, 10);
	if (isNaN(port)) return val;
	if (port >= 0) return port;
	return false;
}
const port = normalizePort(process.env.PORT || '5000');

// ----- define public directory and routes -----
app.use(express.static(__dirname + '/public'));

app.use('/', require('./routes/index'));
app.use('/index', require('./routes/index'));

// ----- start listening -----
app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}`)
});