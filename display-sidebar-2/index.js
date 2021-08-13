const sideBar = document.querySelector("aside");
const menuClose = document.querySelector("#menu-close");
const menuOpen = document.querySelector("#menu-open");

menuOpen.addEventListener("click", () => {
  sideBar.classList.add("show");
  menuOpen.disabled = true;
});

menuClose.addEventListener("click", () => {
  sideBar.classList.remove("show");
  menuOpen.disabled = false;
});
