window.onscroll = function () {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;

  let bar = document.getElementById("myBar");

  if (bar) {
    bar.style.width = scrolled + "%";
  }
};

$(".custom-tooltip .close").click(function () {
  $(this).parent().addClass("d-none");
});

$(".close").click(function () {
  $(this).parents(".custom-modal").addClass("d-none");
});
