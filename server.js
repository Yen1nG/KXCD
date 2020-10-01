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

con.connect(function(err) {
		if (err) throw err;
  
		
	});



app.post('/api/search', (req, res) => {
	
	// res.header("Access-Control-Allow-Origin", "*");
	var searchTerm = req.body.searchTerm;
	
	con.query("SELECT * FROM qa WHERE (question LIKE '%" + searchTerm + "%' OR shortQuestion LIKE '%" + searchTerm + "%');", function (err, result, fields) {
			if (err) throw err;
			res.send(result);
		});
	
});

app.listen(port, () => console.log(`Listening on port ${port}`));