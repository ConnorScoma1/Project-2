// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);


// **************************************************'
// Eventful API Call
// **************************************************

$("#submitSearch").on("click", function(event) {
  event.preventDefault();

  var eventLocation = "Milwaukee, WI";

  var eventLocation = $("#location")
    .val()
    .trim();

  function eventfulAPI() {
    var oArgs = {
      app_key: "HRC47wH49nGCncVv",

      id: "20218701",

      where: eventLocation,

      page_size: 100
    };

    EVDB.API.call("/events/search", oArgs, function(oData) {
      if (oData.events == null) {
        console.log("There Are No Events For this Location");
      } else {
        for (var i = 0; i < oData.events.event.length; i++) {
          var events = oData.events.event;
          console.log(events[i]);
        }

        function initMap() {
          // Setting Up Map after client search request
          var latitude = parseFloat(oData.events.event[0].latitude);
          var longitude = parseFloat(oData.events.event[0].longitude);
          // setting map location
          var location = { lat: latitude, lng: longitude };

          //init google map api
          var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 10,
            center: location
          });

          for (var j = 0; j < oData.events.event.length; j++) {
            // Lat & Lng For Pins Locations
            var latitudeLoop = parseFloat(oData.events.event[j].latitude);
            var longitudeLoop = parseFloat(oData.events.event[j].longitude);

            var locationLoop = { lat: latitudeLoop, lng: longitudeLoop };

            // Pin Information Windows
            var contentString =
              '<div id="content">' +
              '<div id="siteNotice">' +
              "</div>" +
              '<h1 id="firstHeading" class="firstHeading">' +
              oData.events.event[j].title +
              "</h1>" +
              '<div id="bodyContent">' +
              "<p><b>" +
              oData.events.event[j].city_name +
              "</b> <br />" +
              oData.events.event[j].description +
              "</p>" +
              "<p><b>Address: </b>" +
              oData.events.event[j].venue_address +
              "</p>";
            ("</div>");

            var infowindow = new google.maps.InfoWindow({
              content: contentString,
              maxWidth: 200
            });

            // setting markers for vender locations
            var marker = new google.maps.Marker({
              position: locationLoop,
              draggable: false,
              animation: google.maps.Animation.DROP,
              map: map,
              title: oData.events.event[j].description
            });
          }

          marker.addListener("click", toggleBounce);

          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });

        }
        function toggleBounce() {
          if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
          } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }
        }

        initMap();
      }
    });
  }

  eventfulAPI();
});