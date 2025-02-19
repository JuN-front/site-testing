$(function () {
  // ハンバーガーメニューをクリックするとactiveクラスが付与される
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
  });
});
