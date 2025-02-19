$(function () {
  $("#hamburger").on("click", function () {
    $("#hamburger").toggleClass("open");
    $("#header-menu").slideToggle();
  });
});
