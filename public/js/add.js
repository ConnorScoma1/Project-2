

    $("#submit").on("click", function (event) {
        event.preventDefault();
        var newEvent = {
            eventName: $("#event-name").val().trim(),
            eventDate: $("#event-date").val().trim(),
            eventLocation: $("#event-location").val().trim(),
            eventType: $("#event-type").val().trim(),
            // eventDescription: $("#event-description").val().trim();
            //not currently set up but can be just need to add it to several places

        }

        console.log(newEvent)
    
        $.post("/api/add", newEvent, function(response){
          
        $("#event-name").val("");
        $("#event-date").val("");
        $("#event-location").val("");
        $("#event-type").val("");
          });
    

    });
