function openOverlay() {
  $("#dark-overlay").removeClass("d-none");
}

function closeOverlay() {
  $("#dark-overlay").addClass("d-none");
}

$(".custom-modal .close").click(function () {
  $("#dark-overlay").addClass("d-none");
});

$("#right-menu-login .close,#right-menu .close").click(function () {
  $("#dark-overlay-beneath").addClass("d-none");
  $(this).parent().addClass("d-none");
});

$(".slider_text_cont_p1 [src='./assets/images/message.svg']").click(
  function () {
    openOverlay();
    $("#message-modal").removeClass("d-none");
  }
);

$(".slider_text_cont_p1 [src='./assets/images/call.svg']").click(function () {
  openOverlay();
  $("#call-modal").removeClass("d-none");
});

$("[src='./assets/images/user.svg']").click(function () {
  openOverlay();
  $("#signup-modal").removeClass("d-none");
});

$("[data-target='#exampleModal6']").click(function () {
  $("#dark-overlay-beneath").removeClass("d-none");
  $("#right-menu").removeClass("d-none");
});

$(".timepicker").timepicki({ reset: true });

$("#signup-btn").click(function () {
  openOverlay();
  $("#signup-modal").addClass("d-none");
  $("#otp-modal").removeClass("d-none");
});
