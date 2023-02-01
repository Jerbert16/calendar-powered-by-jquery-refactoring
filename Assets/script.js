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

  timeClrEl.each(function() {
    let ids = "#" + $(this).attr("id");
    let keyInput = $(this).attr("id");
    $(ids).children().val(localStorage.getItem(keyInput));
  })
  
  function savedEventMsg() {
    let SavedMsg = todayIsTxt.append("<p>Event successfully saved!</p>");
    SavedMsg.children("p").addClass("savedMsg");
    setTimeout(() => {
      $(".savedMsg").remove();
    }, 550);
  }
});
