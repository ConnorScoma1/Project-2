require("dotenv").config();
var express = require("express");
// var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require("body-parser");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.text()); 



// var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

app.use(express.static("app/public"));

//routes
require("./public/apiRoutes")(app);
require("./public/htmlRoutes")(app);

// Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });

  
module.exports = app;
