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



app.post('/api/search', (req, res) => {
	
	// res.header("Access-Control-Allow-Origin", "*");
	var searchTerm = req.body.searchTerm;
	con.connect(function(err) {
	if (err) throw err;
  
	con.query("SELECT * FROM qa WHERE (question LIKE %" + searchTerm + "% OR shortQuestion LIKE %" + searchTerm + "%);", function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});
});

app.listen(port, () => console.log(`Listening on port ${port}`));