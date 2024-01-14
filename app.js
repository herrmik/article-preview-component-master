const buttonShare = document.querySelector(".share-area");
const hideElement = document.querySelector(".hide");

const authorElement = document.querySelector(".author_date");
const floatElement = document.querySelector(".float");

buttonShare.addEventListener("click", () => {
  hideElement.classList.toggle("hide");
  buttonShare.classList.toggle("share-area-clicked");
  authorElement.classList.toggle("hide-mobile");
  floatElement.classList.toggle("hide-mobile");



});
