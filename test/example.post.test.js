var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var findevent_db= require("../models");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("GET/api/add", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should find all examples", function(done) {
    // Add some examples to the db to test with
    findevent_dv.Example.bulkCreate([
      { name: "First Example", location: "First location", eventType: "Type",date: "date"},
      {  name: "First Example", location: "First location", eventType: "Type",date: "date"}
    ]).then(function() {
      // Request the route that returns all examples
      request.get("/api/all").end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an("array")
          .that.has.lengthOf(4);

        expect(responseBody[0])
          .to.be.an("object")
          .that.includes({ text: "First Example", description: "First location", eventType: "Type", date: "date" });

        expect(responseBody[1])
          .to.be.an("object")
          .that.includes({ text: "First Example", description: "First location", eventType: "Type", date: "date" });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});
