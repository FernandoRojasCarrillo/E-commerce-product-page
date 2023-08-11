"strict";

/* __________ Images __________ */

const IMAGES = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

/* __________ Thumbnail __________ */

const THUMBNAILS = [
  "./images/image-product-1-thumbnail.jpg",
  "./images/image-product-2-thumbnail.jpg",
  "./images/image-product-3-thumbnail.jpg",
  "./images/image-product-4-thumbnail.jpg",
];

/* __________ Tags __________ */
const singleProductButtom = document.querySelectorAll(".single-product-option");
const mainDetailCardContainer = document.querySelector(
  ".main-detail-card-container"
);
const closeCardDetailBtn = document.querySelector(".close-card-btn");

const cardMainImage = document.querySelector(".card-main-image");
const mainImagePreview = document.querySelector(".main-image-preview");
const moveForwardsButton = document.querySelector(".btn-move-ahead");
const moveBackwardsButton = document.querySelector(".btn-move-backwards");

const singleProductOption = document.querySelectorAll(".single-product-option");
const singleCardDetailOption = document.querySelectorAll(
  ".single-card-detail-option"
);

const lastOption = document.querySelector(".last-option");
const nextOption = document.querySelector(".next-option");

/* __________ Variables __________ */
let currImgIndex = 0;

/* __________ Functions __________ */

// Open and close card detail
const HandleOpenCardDetail = (index) => {
  mainDetailCardContainer.style.display = "grid";
  HandleSingleButtonDetail(index);
};

const HandleCloseCardDetail = () => {
  mainDetailCardContainer.style.display = "none";
};

const HandleMoveForwards = () => {
  currImgIndex = currImgIndex === 3 ? 0 : currImgIndex + 1;

  cardMainImage.src = IMAGES[currImgIndex];
  mainImagePreview.src = IMAGES[currImgIndex];

  // Remove class of the current selected buttons
  document
    .querySelector(".option-selected")
    .classList.remove("option-selected");
  document.querySelector(".card-selected").classList.remove("card-selected");

  // Add class to the button selected
  singleProductOption[currImgIndex].classList.add("option-selected");
  singleCardDetailOption[currImgIndex].classList.add("card-selected");
};

const HandleMoveBackwards = () => {
  currImgIndex = currImgIndex === 0 ? 3 : currImgIndex - 1;

  cardMainImage.src = IMAGES[currImgIndex];
  mainImagePreview.src = IMAGES[currImgIndex];

  // Remove class of the current selected buttons
  document
    .querySelector(".option-selected")
    .classList.remove("option-selected");
  document.querySelector(".card-selected").classList.remove("card-selected");

  // Add class to the button selected
  singleProductOption[currImgIndex].classList.add("option-selected");
  singleCardDetailOption[currImgIndex].classList.add("card-selected");
};

const HandleSingleButtonDetail = (index) => {
  currImgIndex = index;

  cardMainImage.src = IMAGES[index];
  mainImagePreview.src = IMAGES[index];

  // Remove class of the current selected buttons
  document
    .querySelector(".option-selected")
    .classList.remove("option-selected");
  document.querySelector(".card-selected").classList.remove("card-selected");

  // Add class to the button selected
  singleProductOption[index].classList.add("option-selected");
  singleCardDetailOption[index].classList.add("card-selected");
};

/* __________ Listeners __________ */
singleProductButtom.forEach((button, index) => {
  button.addEventListener("click", () => HandleOpenCardDetail(index));
});

closeCardDetailBtn.addEventListener("click", () => HandleCloseCardDetail());

moveForwardsButton.addEventListener("click", () => HandleMoveForwards());
moveBackwardsButton.addEventListener("click", () => HandleMoveBackwards());

singleCardDetailOption.forEach((button, index) => {
  button.addEventListener("click", () => HandleSingleButtonDetail(index));
});

lastOption.addEventListener("click", () => HandleMoveBackwards());
nextOption.addEventListener("click", () => HandleMoveForwards());
