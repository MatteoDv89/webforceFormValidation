const carousselBoxImg = document.querySelector(".img");
const prevArr = document.querySelector(".prevArrow");
const nextArr = document.querySelector(".nextArrow");

var numPicture = 1;

const changePicture = (counter) => {
  carousselBoxImg.classList.add("active");
  carousselBoxImg.src = `./img/${counter}.jpg`;
  setTimeout(() => {
       carousselBoxImg.classList.remove("active");
  }, 1000);
 

};

nextArr.addEventListener("click", () => {
  if (numPicture === 3) {
    numPicture = 1;
  } else {
    numPicture++;
  }

  changePicture(numPicture);
});

prevArr.addEventListener("click", () => {
  if (numPicture === 1) {
    numPicture = 3;
  } else {
    numPicture--;
  }

  changePicture(numPicture);
});
