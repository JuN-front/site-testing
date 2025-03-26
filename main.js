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

const button1 = document.getElementById("1st-page");

const button2 = document.getElementById("2nd-page");

const button3 = document.getElementById("3rd-page");

const screen1 = document.querySelector(".event-section-1");

const screen2 = document.querySelector(".event-section-2");

const screen3 = document.querySelector(".event-section-3");

button1.addEventListener("click", function () {
  button2.classList.remove("active");
  button3.classList.remove("active");
  screen2.classList.remove("active");
  screen3.classList.remove("active");
});

button2.addEventListener("click", function () {
  button1.classList.remove("active");
  button3.classList.remove("active");
  screen1.classList.remove("active");
  screen3.classList.remove("active");
});

button3.addEventListener("click", function () {
  button1.classList.remove("active");
  button2.classList.remove("active");
  screen1.classList.remove("active");
  screen2.classList.remove("active");
});
