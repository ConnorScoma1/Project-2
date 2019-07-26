//setting up connection to sql db
var mysql = require("mysql");
var inquirer = require("inquirer");
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  PORT: 3306,
  // Your username
  user: "root",
  // Your password...be sure to enter your password so this works
  password: "Topper333",
  database: "findEvent_db"
});
// connect to the mysql server and sql database throw error if there is an error connecting
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected as id: " + connection.threadId);
});