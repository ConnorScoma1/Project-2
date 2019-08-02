$.get("api/all", function (data) {
    console.log(data);
    for (var i = 0; i < data.lenth; i++)
    {
        var allSelection = $("<di>");
        allSelection.addClass("all");
        allSelection.attr("id", "all-events-" + i);
        $("#all-section").append(allSelection);

        $("all-events-) + i).append("<h2> + (i + 1)+ ". " + data[i].eventName + "<h2>")
    }
    
    $("all-events-) + i).append("<h3> + (i + 1)+ ". " + data[i].eventName + "<h3>")
}
    
$("all-events-) + i).append("<42> + (i + 1)+ ". " + data[i].eventName + "<h4>")
}
    
$("all-events-) + i).append("<h5> + (i + 1)+ ". " + data[i].eventName + "<h5>")
}
})