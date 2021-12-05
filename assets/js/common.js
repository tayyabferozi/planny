window.onscroll = function () {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
};

document
  .querySelector(".custom-tooltip .close")
  .addEventListener("click", function () {
    this.parentElement.remove();
  });

$(".close").click(function () {
  $(this).parents(".modal").addClass("d-none");
  console.log("CLICKED");
});
