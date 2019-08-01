var Event = require("../models/event");

module.exports = function (app) {
  // Get all events
  app.get("/api/all", function (req, res) {
    Event.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  //find specific event by name
  app.get("/api/:eventName", function (req, res) {
    if (req.params.book) {
      Event.findAll({
        where: {
          eventName: req.params.eventName
        }
      }).then(function (results) {
        res.json(results);
      });
    }
  });

  //find specific event by date
  app.get("/api/:date", function (req, res) {
    Event.findAll({
      where: {
        eventDate: req.params.eventDate
      }
    }).then(function (results) {
      res.json(results);
    });
  });



  //post routes//
  //add book
  app.post("/api/add", function (req, res) {
    Event.create({
      name: req.body.eventName,
      location: req.body.location,
      eventType: req.body.eventType,
      date: req.body.eventDate
    });
  });

  //delete book
  app.post("api/delete", function (req, res) {
    Event.destroy({
      where: {
        id: req.body.id
      }
    });
  });
}


