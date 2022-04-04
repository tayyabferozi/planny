const myDatePicker = MCDatepicker.create({
  el: "#example",
  dateFormat: "DD/MM/YYYY",
  showCalendarDisplay: false,
  customOkBTN: "Done",
  customClearBTN: "Reset",
  customWeekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
});

$(".show-edit").each(function (idx, el) {
  let $el = $(el);
  let $input = $el.find("input");

  console.log($input.length);
  if ($input.length) {
    $el.css("width", $input.val().length + 6 + "ch");
  }
});
