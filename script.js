var swiper = new Swiper(".home", {
  loop: true,
  autoplay: {
    delay: 2500, // 2.5 seconds
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const container = document.querySelector(".latest-container");

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
  container.style.cursor = "grabbing";
});

container.addEventListener("mouseleave", () => {
  isDown = false;
  container.style.cursor = "grab";
});

container.addEventListener("mouseup", () => {
  isDown = false;
  container.style.cursor = "grab";
});

container.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 2; // scroll speed
  container.scrollLeft = scrollLeft - walk;
});










