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
          name: req.params.name
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
        date: req.params.date
      }
    }).then(function (results) {
      res.json(results);
    });
  });



  //post routes//
  //add book
  app.post("/api/all", function (req, res) {
    console.log(req.body); 
    db.Event.create({
      name: req.body.name,
      date: req.body.date,
      location: req.body.location,
      eventType: req.body.eventType,
    
    });
  });

  //delete book
  app.post("api/delete", function (req, res) {
    db.Event.destroy({
      where: {
        id: req.body.name
      }
    });
  });
}


