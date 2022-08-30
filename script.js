// runs the inner functions once the page DOM is ready
$(document).ready(function () {

var current = moment().format("MMM Do, YYYY, h:mm:ss");
$("#currentDay").text(current);

// Function to form "live" clock using a timer interval
function updateTime() {
  $('#currentDay').html(moment().format("MMM Do, YYYY, h:mm:ss"));
}
setInterval(updateTime, 1000);

// runs the inner functions once the page DOM is ready
// $(document).ready(function () {

  // event listener to run the function based on the save button click
$(".saveBtn").on("click", function() { 
  var task = $(this).siblings(".taskInput").val();
  var time = $(this).parent().attr("id");
  const mainContainer = document.getElementById("jumbotron");

// if statement to alert user to save a valid task value otherwise to append h3 with a save confirmation text
  mainContainer.innerHTML = "";
  if (task === "") {
    window.alert("Please enter a task before saving");
    return;
  } else {
    const saveAlert = document.createElement("h3");
    saveAlert.textContent = "Your task has been saved to Local Storage! ✔️";
    mainContainer.append(saveAlert);

// saves the task input and timestamp into local storage
  localStorage.setItem(time, task);
  }
  });

// gets items saved from local storage
$("#hour09 .taskInput").val(localStorage.getItem("hour09"));
$("#hour10 .taskInput").val(localStorage.getItem("hour10"));
$("#hour11 .taskInput").val(localStorage.getItem("hour11"));
$("#hour12 .taskInput").val(localStorage.getItem("hour12"));
$("#hour13 .taskInput").val(localStorage.getItem("hour13"));
$("#hour14 .taskInput").val(localStorage.getItem("hour14"));
$("#hour15 .taskInput").val(localStorage.getItem("hour15"));
$("#hour16 .taskInput").val(localStorage.getItem("hour16"));
$("#hour17 .taskInput").val(localStorage.getItem("hour17"));


// updates time block color codes with if statements based on current time
function blockUpdate() {
  var currentHour = moment().hour();

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);

    if (blockHour < currentHour) {
      $(this).addClass("past");
    
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");

    }
  });
 }

  blockUpdate();

});
