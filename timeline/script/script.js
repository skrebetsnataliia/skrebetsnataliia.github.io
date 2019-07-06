$(document).ready(function() {
    var arrayId = ["#message_right-one", "#message_left-one", "#message_right-two", "#message_left-two", "#message_right-three", "#message_left-three", "#message-last", "#cc"];
    for (var key of arrayId) {
        $(key).on("mouseenter", function() {
            $(this).addClass("message_select");
        });
        $(key).on("mouseleave", function() {
            $(this).removeClass("message_select");
        });
    }
})