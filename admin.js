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
  let arr = JSON.parse(localStorage.getItem("addedProducts")) || [];

  arr.push({
    title: productTitle,
    price: productPrice,
    productCategory: productCategory,
    img: productImage,
  });

  localStorage.setItem("addedProducts", JSON.stringify(arr));
}

const basketItemsContainer = document.querySelector(".basket-items");

// Render Basket Items
function renderBasket() {
  const itemDiv = document.createElement("div");
  itemDiv.className = "basket-item";
  productAdd.innerHTML = `
     <div>
      <img src="./images/samsungs10.webp" alt="rasm bor">
      <div class="details">
        <h4>Samsung 10s</h4>
        <p>Price: $980</p>
      </div>
      <div class="quantity-controls">
        <button class="decrement">-</button>
        <span>2</span>
        <button class="increment">+</button>
      </div>
      <div class="price">$1960</div>
     </div>
    `;

  basketItemsContainer.appendChild(itemDiv);
}

renderBasket();
