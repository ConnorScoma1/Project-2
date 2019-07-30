var path = require("path");

module.exports = function (app) {

  //load index
  app.get("/", function (req, res) {
    res.sendFile("./index.html");
  });

  app.get("/add", function (req, res) {
    res.sendFile("./add.html");
  });

  app.get("/find", function (req, res) {
    res.sendFile("./find.html");
  });

  app.get("/delete", function (req, res) {
    res.sendFile("./delete.html");
  });

  app.get("/avoid", function (req, res) {
    res.sendFile("./avoid.html");
  });





  //   // Load example page and pass in an example by id
  //   app.get("/example/:id", function(req, res) {
  //     db.Example.findOne({ where: { id: req.params.id } }).then(function(
  //       dbExample
  //     ) {
  //       res.render("example", {
  //         example: dbExample
  //       });
  //     });
  //   });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
}
