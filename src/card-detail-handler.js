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

/* __________ Functions __________ */

// Open and close card detail
const HandleOpenCardDetail = (e) => {
  mainDetailCardContainer.style.display = "grid";
  HandleSingleButtonDetail(e);
};

const HandleCloseCardDetail = () => {
  mainDetailCardContainer.style.display = "none";
};

const HandleMoveForwards = () => {
  const currentCardNumber = cardMainImage.src.split("-")[2][0];

  if (currentCardNumber < 4) {
    const mainImageUlr = `${cardMainImage.src.split("-")[0]}-product-${
      parseInt(currentCardNumber) + 1
    }.jpg`;

    cardMainImage.src = mainImageUlr;
    mainImagePreview.src = mainImageUlr;

    singleProductOption.forEach((button) =>
      button.classList.remove("option-selected")
    );
    singleCardDetailOption.forEach((button) =>
      button.classList.remove("card-selected")
    );

    singleProductOption[parseInt(currentCardNumber)].classList.add(
      "option-selected"
    );
    singleCardDetailOption[parseInt(currentCardNumber)].classList.add(
      "card-selected"
    );
  }
};

const HandleMoveBackwards = () => {
  const currentCardNumber = cardMainImage.src.split("-")[2][0];

  if (currentCardNumber > 1) {
    const mainImageUlr = `${cardMainImage.src.split("-")[0]}-product-${
      parseInt(currentCardNumber) - 1
    }.jpg`;

    cardMainImage.src = mainImageUlr;
    mainImagePreview.src = mainImageUlr;

    singleProductOption.forEach((button) =>
      button.classList.remove("option-selected")
    );
    singleCardDetailOption.forEach((button) =>
      button.classList.remove("card-selected")
    );

    singleProductOption[parseInt(currentCardNumber) - 2].classList.add(
      "option-selected"
    );
    singleCardDetailOption[parseInt(currentCardNumber) - 2].classList.add(
      "card-selected"
    );
  }
};

const HandleSingleButtonDetail = ({ target }) => {
  const currentCardNumber = target.src.split("-")[2][0];

  const mainImageUlr = `${target.src.split("-")[0]}-product-${parseInt(
    currentCardNumber
  )}.jpg`;

  cardMainImage.src = mainImageUlr;
  mainImagePreview.src = mainImageUlr;

  singleProductOption.forEach((button) =>
    button.classList.remove("option-selected")
  );
  singleCardDetailOption.forEach((button) =>
    button.classList.remove("card-selected")
  );

  singleProductOption[parseInt(currentCardNumber) - 1].classList.add(
    "option-selected"
  );
  singleCardDetailOption[parseInt(currentCardNumber) - 1].classList.add(
    "card-selected"
  );
};

/* __________ Listeners __________ */
singleProductButtom.forEach((button) => {
  button.addEventListener("click", (e) => HandleOpenCardDetail(e));
});

closeCardDetailBtn.addEventListener("click", () => HandleCloseCardDetail());

moveForwardsButton.addEventListener("click", () => HandleMoveForwards());
moveBackwardsButton.addEventListener("click", () => HandleMoveBackwards());

singleCardDetailOption.forEach((button) => {
  button.addEventListener("click", (e) => HandleSingleButtonDetail(e));
});

lastOption.addEventListener("click", () => HandleMoveBackwards());
nextOption.addEventListener("click", () => HandleMoveForwards());
