const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

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
  console.log("Connected!");
  
	con.query("SELECT * FROM qa where id=2", function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});

// app.post('/api/search', (req, res) => {
	// res.send(wtf);
// });

app.listen(port, () => console.log(`Listening on port ${port}`));