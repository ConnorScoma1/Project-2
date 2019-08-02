var db = require("../models"); 

module.exports = function (app) {
  // Get all events
  app.get("/api/all", function (req, res) {
    db.Event.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  //find specific event by name
  app.get("/api/:eventName", function (req, res) {
    if (req.params.book) {
      db.Event.findAll({
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
    db.Event.findAll({
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
    console.log(req.body); 
    db.Event.create({
      name: req.body.eventName,
      location: req.body.location,
      eventType: req.body.eventType,
      date: req.body.eventDate
    });
  });

  //delete book
  app.post("api/delete", function (req, res) {
    db.Event.destroy({
      where: {
        id: req.body.id
      }
    });
  });
}


