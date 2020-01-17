const body = document.querySelector("body");
const IMG_NUMBER = 5;

function handleImgLoad () {
  // API에서 호출할 경우 필요
}

function paintImage (imgNumber) {
  const image = new Image();
  image.src = `./images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
  // image.addEventListener("loadend", handleImgLoad); // API에서 호출할 경우 필요
}

function getRandomNumber () {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init () {
  const randomNumber = getRandomNumber();
  paintImage(randomNumber);
}

init();