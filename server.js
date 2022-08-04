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

// middleware to work with vue web history mode
const history = require('connect-history-api-fallback');
app.use(history());

// ----- initialize port -----
function normalizePort(val) {
	const port = parseInt(val, 10);
	if (isNaN(port)) return val;
	if (port >= 0) return port;
	return false;
}
const port = normalizePort(process.env.PORT || '5050');

// ----- define static file directories and routes -----
app.use(express.static(__dirname + '/public/html'));
app.use(express.static(__dirname + '/public/css'));
app.use(express.static(__dirname + '/public/javascript'));
app.use(express.static(__dirname + '/public/media'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules/font-awesome/css'));
app.use(express.static(__dirname + '/node_modules/vue/dist'));
app.use(express.static(__dirname + '/node_modules/vue-router/dist'));

app.use('/api', require('./routes/api'));

// ----- start listening -----
app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}`)
});