var Event = require("../models/event");

module.exports = function (app) {
  // Get all events
  app.get("/api/all", function (req, res) {
    Event.findAll({}).then(function (results) {
      res.json(results);
    });
  });
}

  // Create a new example
//   app.post("/api/examples", function(req, res) {
//     Event.create(req.body).then(function(results) {
//       res.json(results);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     Event.destroy({ where: { id: req.params.id } }).then(function(
//       results
//     ) {
//       res.json(results);
//     });
//   });
// };
