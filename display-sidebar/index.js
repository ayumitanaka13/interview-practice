const sideBar = document.querySelector("aside");
const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");

openBtn.addEventListener("click", () => {
  //   sideBar.style.display = "block";
  sideBar.style.left = "0";
  //   sideBar.classList.add("slide");
  openBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  //   sideBar.style.display = "none";
  sideBar.style.left = "-25%";
  //   sideBar.classList.remove("slide");
  openBtn.style.display = "block";
});
