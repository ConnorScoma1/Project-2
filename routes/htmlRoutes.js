var path = require("path");

module.exports = function (app) {

  //load index
  app.get("/", function(req, res) {
    res.sendFile("./public/index.html"); 
 })

  // app.get("/add", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../views/index"));
  // });

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
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
  // };
}
