var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
const bodyParser = require('body-parser');
var mysql = require('mysql');
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "questions"
});

// con.connect(function(err) {
  // if (err) throw err;
  // console.log("Connected!");
  
	// con.query("SELECT * FROM qa where id=2", function (err, result, fields) {
		// if (err) throw err;
		// console.log(result);
	// });
// });

app.post('/api/search', (req, res) => {
	
	// res.header("Access-Control-Allow-Origin", "*");
	var searchTerm = req.body.searchTerm;
	console.log(searchTerm);
	res.send(searchTerm);
});

app.listen(port, () => console.log(`Listening on port ${port}`));