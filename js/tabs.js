document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".how-it-works__step").forEach((e) => {
    e.addEventListener("click", (e) => {
      const tab = e.currentTarget.dataset.path;
      document.querySelectorAll(".tab-content").forEach((e) => {
        e.classList.remove("tab-content--active");
        document
          .querySelector(`[data-target='${tab}']`)
          .classList.add("tab-content--active");
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".how-it-works__step").forEach((e) => {
    e.addEventListener("click", (e) => {
      const step = e.currentTarget.dataset.step;
      document.querySelectorAll(".how-it-works__step").forEach((e) => {
        e.classList.remove("how-it-works__step--active");
        document
          .querySelector(`[data-target='${step}']`)
          .classList.add("how-it-works__step--active");
      });
    });
  });
});

$(function () {
  $("#accordion").accordion({
    active: true,
    collapsible: true,
  });
});
