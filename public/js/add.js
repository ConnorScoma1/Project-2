$("#submit").on("click", function (event) {
    event.preventDefault();
    alert("I was clicked"); 
    var newEvent = {
        eventName: $("#event-name").val().trim(),
        eventDate: $("#event-date").val().trim(),
        eventLocation: $("#event-location").val().trim(),
        eventType: $("#event-type").val().trim(),
        // eventDescription: $("#event-description").val().trim();
        //not currently set up but can be just need to add it to several places

    }

    $.post("api/add", newEvent)
        .done(function (data) {
            console.log(data);
        });
    
    $("#event-name").val("");
    $("#event-date").val("");
    $("#event-location").val("");
    $("#event-type").val("");
    // $("#event-description").val("");

});