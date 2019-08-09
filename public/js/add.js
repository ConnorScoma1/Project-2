

    $("#submit").on("click", function (event) {
        event.preventDefault();
        var newEvent = {
            name: $("#event-name").val().trim(),
            date: $("#event-date").val().trim(),
            eventType: $("#event-type").val().trim(),
            location: $("#event-location").val().trim(),
            // eventDescription: $("#event-description").val().trim();
            //not currently set up but can be just need to add it to several places

        }

        console.log(newEvent)
    
        $.post("/api/all", newEvent)
            .done(function(response){
            console.log(response); 
        }); 
         
          $("#event-name").val("");
          $("#event-location").val("");
              $("#event-type").val("");
        $("#event-date").val("");
        $("#event-description").val(''); 
          
    });
