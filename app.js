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
      }
    } else {
      verif++;
      verifpass = input.value;
      spanPass.classList.remove("active");
      formButton.disabled = false;

      confirmPass.pattern = verifpass;
    }
  }

  if (input.name === "confirm") {
    input.pattern = verifpass;
    if (input.value.length > 6 && input.value === input.pattern) {
      verif++;
      spanConfirmPass.classList.remove("active");
      indicator.classList.add("active");
    } else {
      verif--;
      indicator.classList.remove("active");
      spanConfirmPass.classList.add("active");
    }
  }
};

username.addEventListener("input", (e) => handleError(e.target));
email.addEventListener("input", (e) => handleError(e.target));
password.addEventListener("input", (e) => handleError(e.target));
confirmPass.addEventListener("input", (e) => handleError(e.target));

//generateur

const toggle = document.querySelector(".toggle");
const mdp = document.querySelector("#generator");
const buttonmdp = document.querySelector("#generer");
const modal = document.querySelector(".generator");
const copied = document.querySelector(".copied");

const abc = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specCharc = "%/$ù!?+-@";

const abcTab = abc.split("");
const numberTab = number.split("");
const ABCTab = ABC.split("");
const specCharcTab = specCharc.split("");
const randomTab = [...abcTab, ...numberTab, ...ABCTab, ...specCharcTab];

var newMdp = "";

const randomMdp = () => {
  if (mdp.value < 12) {
    for (let i = 0; i < 12; i++) {
      let randomAbc = Math.ceil(Math.random() * (randomTab.length - 1));
      console.log(randomTab.length - 1);
      newMdp += randomTab[randomAbc];
    }

    mdp.value = newMdp;

    navigator.clipboard.writeText(mdp.value);
    copied.classList.add("active");
    setTimeout(() => {
      copied.classList.remove("active");
    }, 1500);
  }
};

const displayChange = () => {
  modal.classList.toggle("active");
};

buttonmdp.addEventListener("click", randomMdp);
toggle.addEventListener("click", displayChange);
