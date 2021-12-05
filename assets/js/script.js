// Get current date and display in #currentDay field
var currentDay = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDay);

//wrap in function to exectute once DOM is loaded
$(document).ready(function () {
// add save function
    $(".saveBtn").on("click", function () {
        
        //obtain values from time blocks
        var task = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // save tasks to local storage
        localStorage.setItem(time, task);
    })

//time keeping 
function clock() {
    //get current hour
    var currentTime = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id"));

        // check if hour is past, present or future and adjust classes accordingly

        //past
        if (timeBlock < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        //present
        else if (timeBlock === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } 
        //future
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        
        }
    })
}
    

    // Get saved items from local storage
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    $("#18 .description").val(localStorage.getItem("18"));
    
clock();
    })