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

<script>
  const track = document.querySelector(".carousel-inner");
  const items = document.querySelectorAll(".item");
  const leftBtn = document.querySelector(".left");
  const rightBtn = document.querySelector(".right");

  const itemWidth = 331 + 48; // card width + gap
  const visibleCount = 4;
  const totalItems = items.length;

  let currentIndex = 0;

  function updateCarousel() {
    const offset = currentIndex * itemWidth;
    track.style.transform = `translateX(-${offset}px)`;
  }

  function moveNext() {
    currentIndex = (currentIndex + 1) % (totalItems - visibleCount + 1);
    updateCarousel();
  }

  function movePrev() {
    currentIndex = (currentIndex - 1 + (totalItems - visibleCount + 1)) % (totalItems - visibleCount + 1);
    updateCarousel();
  }

  rightBtn.addEventListener("click", moveNext);
  leftBtn.addEventListener("click", movePrev);

  // Auto scroll every 3 seconds
  setInterval(moveNext, 3000);
</script>




