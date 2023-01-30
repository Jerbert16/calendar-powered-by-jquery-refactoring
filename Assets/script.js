// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// User Story
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively
// Acceptance Criteria
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

//Step 2: Define date display area
//Step 3: Use dateJS to display date

//Step 5: Code box to change color with time
//Step 6: Code button to save input to local storage
//Step 7: Implement get from Local - test
//Step 8: Build out rest of boxes for work day (possibly for loop)

$(function () {
  //Set date to display current day of week and MM/DD/YYYY
  const timeClrEl = $(".time-block");
  const calTimeEl = $("div > div > div").text()
 

  const currentDay = dayjs().format("dddd, MMM D, YYYY");
  const currentHr = 12 //dayjs().format("H");

  console.log(calTimeEl);

  $("#currentDay").text(currentDay);

  $("button").on("click", function () {
    let timeOfDay = $(this).parent().attr("id");
    let inputText = $(this).siblings(".description").val();
    localStorage.setItem(timeOfDay, inputText);
   });


   if (currentHr < calTimeEl){ 
   timeClrEl.attr('class', 'row time-block past');
   }
   if (currentHr == calTimeEl) {
    timeClrEl.attr('class', 'row time-block present');
   } 
   if (currentHr > calTimeEl) {
    timeClrEl.attr('class', 'row time-block future');
   }

   $("#hour-9 .description").val(localStorage.getItem("hour-9"));
   $("#hour-10 .description").val(localStorage.getItem("hour-10"));
   $("#hour-11 .description").val(localStorage.getItem("hour-11"));
   $("#hour-12 .description").val(localStorage.getItem("hour-12"));
   $("#hour-13 .description").val(localStorage.getItem("hour-13"));
   $("#hour-14 .description").val(localStorage.getItem("hour-14"));
   $("#hour-15 .description").val(localStorage.getItem("hour-15"));
   $("#hour-16 .description").val(localStorage.getItem("hour-16"));
   $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
