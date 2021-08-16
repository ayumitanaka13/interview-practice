const testEmail = "ayumi@mail.com";
const testPassword = "12345678";

const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btn = document.querySelector("button");

form.addEventListener("change", () => {
  if (email.value !== "" && password.value !== "") {
    btn.disabled = false;
  }
});

form.addEventListener("submit", () => {
  if (email.value === testEmail && password.value === testPassword) {
    alert("Login Success!");
  } else {
    alert("Login Failure!");
  }
});
