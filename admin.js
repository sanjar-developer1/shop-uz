const productAdd = document.querySelector("#productList");
const productCategory = document.querySelector("#productCategory");
const productPrice = document.getElementById("productPrice");
const productDescription = document.getElementById("productDescription");
const productImage = document.getElementById("productImage");
const productTitle = document.getElementById("productTitle");
const submitBtn = document.querySelector(".add-product");

const product = {
  title: productTitle,
  price: productPrice,
  productCategory: productCategory,
  img: productImage,
};

function addCard() {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
}
