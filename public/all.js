$.get("api/all", function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        var allSelection = $("<div>");
        allSelection.addClass("all");
        allSelection.attr("id", "all-events-" + i);
        $("#all-section").append(allSelection);

        $("#all-events-" + i).append("<h2>" + (i + 1) + ". " + data[i].name + "<h2>");
        $("#all-events-" + i).append("<h3>" + (i + 1) + ". " + data[i].date + "<h2>");
        $("#all-events-" + i).append("<h3>" + (i + 1) + ". " + data[i].location + "<h2>");
        $("#all-events-" + i).append("<h3>" + (i + 1) + ". " + data[i].eventType + "<h2>");
    }
});
