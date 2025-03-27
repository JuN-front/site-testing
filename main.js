window.onload = function () {
  var nav = document.getElementById("nav-wrapper");
  var hamburger = document.getElementById("js-hamburger");
  var blackBg = document.getElementById("js-black-bg");

  hamburger.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
  blackBg.addEventListener("click", function () {
    nav.classList.remove("open");
  });
};

const tabItems = document.querySelectorAll(".button");

tabItems.forEach((button) => {
  button.addEventListener("click", () => {
    // すべてのタブを非アクティブにする
    tabItems.forEach((t) => {
      t.classList.remove("active");
    });
    // すべてのコンテンツを非表示にする
    const Events = document.querySelectorAll(".event-section");
    Events.forEach((event) => {
      event.classList.remove("active");
    });

    // クリックされたタブをアクティブにする
    button.classList.add("active");

    // 対応するコンテンツを表示
    const tabIndex = Array.from(tabItems).indexOf(button);
    Events[tabIndex].classList.add("active");
  });
});
