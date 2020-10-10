var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
const bodyParser = require('body-parser');
// var mysql = requir('mysql');
const port = process.env.PORT || 5000;
const _ = require('lodash');
const data = require('./KXCDJSON.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/search', (req, res) => {
	var searchTerm = req.body.searchTerm;
	
	console.log(searchTerm)
	
	console.log(data.length);
	
	var matches = _.filter(data, function(datum) {return _.includes(datum.question, searchTerm) || _.includes(datum.shortQuestion, searchTerm)});
	
	res.send(matches);
	
});

app.listen(port, () => console.log(`Listening on port ${port}`));