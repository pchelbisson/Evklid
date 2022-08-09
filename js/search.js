document.addEventListener("DOMContentLoaded", (e) => {
  const searchIcon = document.querySelector(".header__search");
  const form = document.querySelector(".search-form");
  const closeBtn = document.querySelector(".search-form__close");

  searchIcon.addEventListener("click", (e) => {
    form.classList.add("search-form_show");
  });

  closeBtn.addEventListener("click", (e) => {
    form.classList.remove("search-form_show");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});
