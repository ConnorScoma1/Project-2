require("dotenv").config();
var express = require("express");
var db = require("./models"); 


// var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require("body-parser");
var moment = require('moment');


// console.log(moment);



// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.text()); 

 

var syncOptions = { force: true };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

app.use(express.static("public"));

// //routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

  
module.exports = app;
