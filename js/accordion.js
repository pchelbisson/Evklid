document.addEventListener("DOMContentLoaded", function () {
  let acc = new Accordion(".faq__list", {
    duration: 700,
    elementClass: "faq__item",
    triggerClass: "faq__top",
    panelClass: "faq__bottom",
    showMultiple: false,
  });
});
