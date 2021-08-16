const menu = document.querySelector("#menu");
const ul = document.querySelector("ul");

let isOpen = false;

menu.addEventListener("click", () => {
  isOpen ? ul.classList.remove("show") : ul.classList.add("show");
  isOpen = !isOpen;
});
