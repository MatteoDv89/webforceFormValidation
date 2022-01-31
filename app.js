const username = document.querySelector('input[name="username"');
const email = document.querySelector('input[name="email"');
const password = document.querySelector('input[name="password"');
const confirmPass = document.querySelector('input[name="confirm"');
const formButton = document.querySelector("button");

const spanUser = document.querySelector("#spanUser");
const spanEmail = document.querySelector("#spanEmail");
const spanPass = document.querySelector("#spanPass");
const spanConfirmPass = document.querySelector("#spanConfirmPass");
const indicator = document.querySelector("#indicator");
var verifpass;

var verif = 0;

const handleError = (input) => {
  if (input.name === "username") {
    if (input.value.length < 6 && input.value.length !== 0) {
      spanUser.classList.add("active");
      if (verif > 0) {
        verif--;
      }
    } else {
      spanUser.classList.remove("active");
      verif++;
    }
  }

  if (input.name === "email") {
    if (
      (input.value.length !== 0 &&
        input.value.includes("@") &&
        input.value.split("@")[1]?.split(".")[1] === "fr") ||
      (input.value.length !== 0 &&
        input.value.includes("@") &&
        input.value.split("@")[1]?.split(".")[1] === "com")
    ) {
      verif++;
      spanEmail.classList.remove("active");
    } else {
      if (verif > 0) {
        verif--;
      }
      spanEmail.classList.add("active");
    }
  }

  if (input.name === "password") {
    if (!input.value.match(/^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/)) {
      spanPass.classList.add("active");
      if (verif > 0) {
        verif--;
        indicator.classList.remove("active");
      }
    } else {
      verif++;
      verifpass = input.value;
      spanPass.classList.remove("active");
      formButton.disabled = false;
      indicator.classList.add("active");
      confirmPass.pattern = verifpass;
    }
  }

  if (input.name === "confirm") {
    input.pattern = verifpass;
    if (input.value.length > 6 && input.value === input.pattern) {
      verif++;
      spanConfirmPass.classList.remove("active");
    } else {
      verif--;
      spanConfirmPass.classList.add("active");
    }
  }
};

username.addEventListener("change", (e) => handleError(e.target));
email.addEventListener("change", (e) => handleError(e.target));
password.addEventListener("change", (e) => handleError(e.target));
confirmPass.addEventListener("change", (e) => handleError(e.target));
