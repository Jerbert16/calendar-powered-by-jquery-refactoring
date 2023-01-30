$(function () {
  const timeClrEl = $(".time-block");
  const currentDay = dayjs().format("dddd, MMM D, YYYY");
  const currentHr = dayjs().format("H");
  const todayIsTxt = $("#currentDay").text(currentDay);

  $("button").on("click", function () {
    let timeOfDay = $(this).parent().attr("id");
    let inputText = $(this).siblings(".description").val();
    localStorage.setItem(timeOfDay, inputText);
    savedEventMsg();
  });

  timeClrEl.each(function () {
    let calTime = parseInt($(this).attr("id").split("hour-")[1]);

    if (calTime < currentHr) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (calTime === currentHr) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });

  function savedEventMsg() {
    let SavedMsg = todayIsTxt.append("<p>Event successfully saved!</p>");
    SavedMsg.children("p").addClass("savedMsg");
    setTimeout(() => {
      $(".savedMsg").remove();
    }, 550);
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
