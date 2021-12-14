$(".custom-modal .close").click(function () {
  $("#dark-overlay").addClass("d-none");
});

$("#right-menu-login .close,#right-menu .close").click(function () {
  $("#dark-overlay").addClass("d-none");
  $(this).parent().addClass("d-none");
});
