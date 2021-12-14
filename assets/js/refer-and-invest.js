$(".tab").click(function () {
  $(".tab").removeClass("active");
  $(".cards .card").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("data-toggle")).addClass("active");
});
