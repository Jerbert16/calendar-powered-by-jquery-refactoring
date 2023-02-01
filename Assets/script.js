// put everything in provided function
// display time using dayjs

$(function () {
  const timeClrEl = $(".time-block");
  const currentDay = dayjs().format("dddd, MMM D, YYYY");
  const currentHr = dayjs().format("H");
  const todayIsTxt = $("#currentDay").text(currentDay);

  //add event listener, setup local storage

  $("button").on("click", function () {
    let timeOfDay = $(this).parent().attr("id");
    let inputText = $(this).siblings(".description").val();
    localStorage.setItem(timeOfDay, inputText);
    savedEventMsg();
  });

  // retrieve intigers from element ids to compare aginst current hour

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

  // retrieve from local storage & display

  timeClrEl.each(function () {
    let ids = "#" + $(this).attr("id");
    let keyInput = $(this).attr("id");
    $(ids).children().val(localStorage.getItem(keyInput));
  });

  // indicates input was successfully saved 
  
  function savedEventMsg() {
    let SavedMsg = todayIsTxt.append("<p>Event successfully saved!</p>");
    SavedMsg.children("p").addClass("savedMsg");
    setTimeout(() => {
      $(".savedMsg").remove();
    }, 550);
  }
});
