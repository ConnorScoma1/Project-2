//displays all events that user wants to add
$.get("/api/all", function (data) {
    for (var i = 0; i < data.length; i++) {
        var addSection = $("<div>");
        var addSection.addClass("add");
        addSection.attr("id", "add-event-" + i");
        $("addSection").append(addSection);

        $("add-event0-"+ i ).append("<h2>+ i (append);
            
        $("add-event0-"+ i ).append("<h3>Name+ i (append);
            
        $("add-event0-"+ i ).append("<h3>location+ i (append);
            
        $"add-event0-"+ i ).prepend("<h2>+ date(append);
    }
 
});