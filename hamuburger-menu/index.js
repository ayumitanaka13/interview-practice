const menu = document.querySelector("#menu");
const menuToggle = document.querySelector("#menu-toggle");

let isOpen = false;

menuToggle.addEventListener("click", () => {
  isOpen = !isOpen;
  isOpen ? menu.classList.add("menu-open") : menu.classList.remove("menu-open");
});
