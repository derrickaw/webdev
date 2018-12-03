// Checkoff specific todos by clicking
$("li").click(function(){
    $(this).toggleClass("completed");
})

// Click on X to delete todo
$("span").click(function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
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

