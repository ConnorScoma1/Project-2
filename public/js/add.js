

    $("#submit").on("click", function (event) {
        event.preventDefault();
        var newEvent = {
            name: $("#event-name").val().trim(),
            location: $("#event-location").val().trim(),
            eventType: $("#event-type").val().trim(),
            date: $("#event-date").val().trim(),
            // eventDescription: $("#event-description").val().trim();
            //not currently set up but can be just need to add it to several places

        }

        console.log(newEvent)
    
        $.post("/api/add", newEvent, function(response){
          
        $("#event-name").val("");
        $("#event-location").val("");
            $("#event-type").val("");
            $("#event-date").val("");
            
            console.log(location); 
          });
    

    });
