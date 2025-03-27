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

// 1ボタン
const buttonA = document.getElementById("a_btn");

// 2ボタン
const buttonB = document.getElementById("b_btn");

// 3ボタン
const buttonC = document.getElementById("c_btn");

// A画面
const screenA = document.querySelector(".event-section-a");

// B画面
const screenB = document.querySelector(".event-section-b");

// C画面
const screenC = document.querySelector(".event-section-c");

buttonA.addEventListener("click", function () {
  // 1ボタンをクリックした時
  buttonA.classList.remove("active"); // 'buttonA' から 'active' が外される
  buttonB.classList.remove("active"); // 'buttonB' から 'active' が外される
  buttonC.classList.remove("active"); // 'buttonC'から 'active'　が外される
  screenA.classList.remove("active"); // 'screenA' から 'active' が外される
  screenB.classList.remove("active"); // 'screenB' から 'active' が外される
  screenC.classList.remove("active"); // 'screenC' から 'active' が外される
});

buttonB.addEventListener("click", function () {
  // 2ボタンをクリックした時
  buttonA.classList.add("active"); // 'buttonA' に 'active' が追加される
  buttonB.classList.add("active"); // 'buttonB' に 'active' が追加される
  buttonC.classList.remove("active"); // 'buttonC' から 'active' が外される
  screenA.classList.add("active"); // 'screenA' に 'active' が追加される
  screenB.classList.add("active"); // 'screenB' に 'active' が追加される
  screenC.classList.remove("active"); // 'screenC' から 'active' が外される
});

buttonC.addEventListener("click", function () {
  // 3ボタンをクリックした時
  buttonA.classList.add("active"); // 'buttonA' に 'active' が追加される
  buttonB.classList.remove("active"); // 'buttonB' に 'active' が追加される
  buttonC.classList.add("active"); // 'buttonC' から 'active' が外される
  screenA.classList.add("active"); // 'screenA' に 'active' が追加される
  screenB.classList.remove("active"); // 'screenB' に 'active' が追加される
  screenC.classList.add("active"); // 'screenC' から 'active' が外される
});
