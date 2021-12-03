// Get current date and display in #currentDay field
var currentDay = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDay);

function clock() {
    //get current hour
    var currentTime = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id"));

        // check if hour is past, present or future and adjust classes accordingly

        if (timeBlock < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (timeBlock === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}
clock();