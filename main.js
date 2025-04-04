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

window.addEventListener("load", () => {
  const slider = document.querySelector(".slider");
  const slides = Array.from(slider.children);
  const gap = 48;
  const speed = 0.5;
  let offsetX = 0;

  // Step 1: Duplicate slides
  slides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    slider.appendChild(clone);
  });

  // Wait for layout calculation
  setTimeout(() => {
    const firstSlide = slides[0];
    const slideWidth = firstSlide.offsetWidth;
    const scrollWidth = (slideWidth + gap) * slides.length;

    function loop() {
      offsetX -= speed;

      if (-offsetX >= scrollWidth) {
        // Reset scroll to 0 to keep it seamless
        slider.style.transform = `translateX(0px)`;
        offsetX = 0;
      } else {
        slider.style.transform = `translateX(${offsetX}px)`;
      }

      requestAnimationFrame(loop);
    }

    loop();
  }, 50); // slight delay to ensure layout is stable
});
