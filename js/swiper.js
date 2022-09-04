const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  a11y: {
    paginationBulletMessage: "Проектные решения любой сложности {{index}}",
  },
});
