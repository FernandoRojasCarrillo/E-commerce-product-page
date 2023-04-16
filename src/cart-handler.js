/* __________ Tags __________ */
const openCartIcon = document.querySelector(".menu-car-incon");
const cartContainer = document.querySelector(".cart-product-amount-container");

const cartEmptyText = document.querySelector(".cart-empty-text");
const cartProductsContainer = document.querySelector(
  ".cart-products-container"
);
const cartProductsButton = document.querySelector(".cart-products-button");

const addCartButton = document.querySelector(".add-cart-button");

const removeCartButton = document.querySelector(".delete-single-cart-btn");

const productsAmount = document.querySelector(".products-amount");
const productsAmountHandler = document.querySelector(
  ".products-amount-handler"
);
const TotalProductsAmount =
  productsAmountHandler.querySelector(".products-amount");
const CartTotalAmount = document.querySelector(".total-amount");

// button plus and button minus tags
const moreButton = document.querySelector(".more-button");
const lessButton = document.querySelector(".less-button");

// Open and close navbar container
const menuOptionsContainer = document.querySelector(".menu-options-container");
const body = document.querySelector("body");

const menuIcon = document.querySelector(".menu-icon");
const closeNavbarMenu = document.querySelector(".close-navbar-menu");

/* __________ Functions __________ */
const addProductToCart = () => {
  if (TotalProductsAmount.textContent === "0") {
    const currentProductAmount = productsAmount.textContent[10];
    const currentPrice = productsAmount.textContent.replace(
      currentProductAmount,
      1
    );

    productsAmount.textContent = currentPrice;
    CartTotalAmount.textContent = currentPrice.split("x")[0].trim();
    TotalProductsAmount.textContent = "1";

    cartEmptyText.style.display = "none";
    cartProductsContainer.style.display = "flex";
    cartProductsButton.style.display = "flex";
  }
};

const removeProductFromCart = () => {
  cartEmptyText.style.display = "flex";
  cartProductsContainer.style.display = "none";
  cartProductsButton.style.display = "none";

  TotalProductsAmount.textContent = "0";
  productsAmount.textContent = "$125.00 x 1";
  CartTotalAmount.textContent = "$125.00";
};

const HandlePlusButton = () => {
  const TotalProductsAmount =
    productsAmountHandler.querySelector(".products-amount");

  if (TotalProductsAmount.textContent === "0") addProductToCart();
  else {
    const CartTotalAmount = document.querySelector(".total-amount");
    const productsAmount = document.querySelector(".products-amount");
    const currentProductAmount = productsAmount.textContent
      .split("x")[1]
      .trim();

    const currentPrice = productsAmount.textContent.split("x")[0].trim();

    TotalProductsAmount.textContent =
      parseInt(TotalProductsAmount.textContent) + 1;
    productsAmount.textContent = `${currentPrice} x ${
      parseInt(currentProductAmount) + 1
    }`;

    const currentTotalAmount = parseInt(
      currentPrice.split(".")[0].replace("$", "")
    );
    CartTotalAmount.textContent = `$${
      currentTotalAmount * (parseInt(currentProductAmount) + 1)
    }.00`;
  }
};

const HandleMinusButton = () => {
  const TotalProductsAmount =
    productsAmountHandler.querySelector(".products-amount");

  if (TotalProductsAmount.textContent === "1") removeProductFromCart();
  else if (TotalProductsAmount.textContent > 0) {
    const CartTotalAmount = document.querySelector(".total-amount");
    const productsAmount = document.querySelector(".products-amount");
    const currentProductAmount = productsAmount.textContent
      .split("x")[1]
      .trim();
    const currentPrice = productsAmount.textContent.split("x")[0];

    TotalProductsAmount.textContent =
      parseInt(TotalProductsAmount.textContent) - 1;
    productsAmount.textContent = `${currentPrice}x ${
      parseInt(currentProductAmount) - 1
    }`;

    const currentTotalAmount = parseInt(
      currentPrice.split(".")[0].replace("$", "")
    );
    CartTotalAmount.textContent = `$${
      currentTotalAmount * (parseInt(currentProductAmount) - 1)
    }.00`;
  }
};

const HandleOpenNavbar = () => {
  body.style.setProperty("--navbar-translate", "0%");
  menuOptionsContainer.classList.add("close-navbar-menu");

  setTimeout(() => {
    menuOptionsContainer.style.transform = "translateX(0%)";
  }, 50);
};

const HandleCloseNavbar = () => {
  menuOptionsContainer.style.transform = "translateX(-100%)";

  setTimeout(() => {
    body.style.setProperty("--navbar-translate", "-100%");
    menuOptionsContainer.classList.remove("close-navbar-menu");
  }, 50);
};

/* __________ Listeners __________ */
openCartIcon.addEventListener("click", () => {
  cartContainer.classList.toggle("cart-open");
});

addCartButton.addEventListener("click", () => addProductToCart());

removeCartButton.addEventListener("click", () => removeProductFromCart());

moreButton.addEventListener("click", () => HandlePlusButton());
lessButton.addEventListener("click", () => HandleMinusButton());

menuIcon.addEventListener("click", () => HandleOpenNavbar());
closeNavbarMenu.addEventListener("click", () => HandleCloseNavbar());
