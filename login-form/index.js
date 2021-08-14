const userEmail = "ayumi@mail.com";
const userPassword = "12345678";

const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const button = document.querySelector("button");

form.addEventListener("change", () => {
  if (email.value !== "" && password.value !== "") {
    button.disabled = false;
  }
});

form.addEventListener("submit", () => {
  if (email.value === userEmail && password.value === userPassword) {
    alert("Login successful!");
  } else {
    alert("Login failed!");
  }
});
