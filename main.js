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

const button1 = document.getElementById("button-1");

const button2 = document.getElementById("button-2");

const button3 = document.getElementById("button-3");

const screen1 = document.querySelector(".event-section-1");

const screen2 = document.querySelector(".event-section-2");

const screen3 = document.querySelector(".event-section-3");

button1.addEventListener("click", function () {
  screen1.classList.remove("active");
  screen2.classList.remove("active");
  screen3.classList.remove("active");
  button1.classList.remove("active");
  button2.classList.remove("active");
  button3.classList.remove("active");
});

button2.addEventListener("click", function () {
  screen1.classList.add("active");
  screen2.classList.add("active");
  screen3.classList.remove("active");
  button1.classList.add("active");
  button2.classList.add("active");
  button3.classList.remove("active");
});

button3.addEventListener("click", function () {
  screen1.classList.add("active");
  screen2.classList.remove("active");
  screen3.classList.add("active");
  button1.classList.add("active");
  button2.classList.remove("active");
  button3.classList.add("active");
});
