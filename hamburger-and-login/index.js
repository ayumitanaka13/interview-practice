const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const button = document.querySelector("button");
const emailTest = "ayumi@mail.com";
const passwordTest = "12345678";

const menuToggle = document.querySelector("#menu-toggle");
const ul = document.querySelector("ul");
const overlay = document.querySelector("#overlay");

let isOpen = false;

form.addEventListener("change", () => {
  if (email.value !== "" && password.value !== "") {
    button.disabled = false;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value === emailTest && password.value === passwordTest) {
    alert("Login successful!");
  } else {
    alert("Login failure...");
  }
});

menuToggle.addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) {
    ul.classList.add("show-menu");
    overlay.classList.add("show-overlay");
  } else {
    ul.classList.remove("show-menu");
    overlay.classList.remove("show-overlay");
  }
});
