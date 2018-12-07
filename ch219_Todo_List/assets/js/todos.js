// Checkoff specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})

// Click on X to delete todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event) {
    // Check for enter key
    if(event.which === 13) {
        // grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        // create new li and add to ul
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
})




    // // if li is gray; turn black
    // if($(this).css("color") === "rgb(128, 128, 128)") {
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     });
    // }
    // // else; ture gray
    // else {
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    // }

