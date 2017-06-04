var mysql = require("mysql");
var secret = require("../secret");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "chippi4e",
  database: "burgers_db"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
