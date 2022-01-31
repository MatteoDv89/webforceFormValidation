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
      }
    } else {
      verif++;
      spanPass.classList.remove("active");
    }
  }

  if (input.name === "confirm") {
    if (input.value.length > 6) {
      verif++;
    } else {
      verif--;
    }
  }

  if (verif >= 4) {
    formButton.disabled = false;
    indicator.classList.add("active");
  } else {
    indicator.classList.remove("active");
  }

  console.log(verif);
};

username.addEventListener("change", (e) => handleError(e.target));
email.addEventListener("change", (e) => handleError(e.target));
password.addEventListener("change", (e) => handleError(e.target));
confirmPass.addEventListener("change", (e) => handleError(e.target));
