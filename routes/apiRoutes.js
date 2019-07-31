var Event = require("../models/event");

module.exports = function (app) {
    // Get all events
    app.get("/api/all", function (req, res) {
      Event.findAll({}).then(function (results) {
        res.json(results);
      });
    });
  }

//   debugger
//   // Create a new example
  app.post("/api/new", function (req, res) {
    
    Event.create({
      name: req.body.eventName,
      location: req.body.location,
      eventType: req.body.eventType,
      date: req.body.eventDate

    });
  });

  
  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    Event.destroy({ where: { id: req.params.id } }).then(function(
      results
    ) {
      res.json(results);
    });

