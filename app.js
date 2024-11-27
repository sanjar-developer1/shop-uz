// 1. sinxron va asinxron functionlar
// 2. http va api nima.
// 3. AJAX nima va readyState.
// 4. Status kodlar.

// console.log(1);
// console.log(2);
// alert("Salom");
// console.log(3);

// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log(3);
// }, 2000);

// console.log(4);

// AJAX - asinxron javaScript and(va) XML

const sorov = new XMLHttpRequest();

sorov.addEventListener("readystatechange", function () {
  // console.log(sorov, sorov.readyState);
  // console.log(sorov.responseText);
  // const parseData = JSON.parse(sorov.responseText);
  // console.log(parseData.carts);
  // console.log(sorov.response);

  const parseData = JSON.parse(sorov.response);
  const getData = parseData.products;
  // const ff = JSON.parse(localStorage.getItem("products2")) || [];
  localStorage.setItem("products2", JSON.stringify(getData));
});

sorov.open("GET", "https://dummyjson.com/products");

sorov.send();

let burger = document.getElementById("burgerHeader");
let catalogDiscount = document.getElementById("catalogDiscount");
let catalogCard = document.getElementById("catalogCard");
let menu = document.getElementById("menu");
let xmark = document.getElementById("xmark");
burger.addEventListener("click", function () {
  if (window.innerWidth > 768) {
    if (menu.style.opacity == 1 || menu.style.opacity == "") {
      xmark.style.opacity = "1";
      menu.style.opacity = "0";
      catalogCard.style.transform = "translateY(-400px)";
    } else {
      menu.style.opacity = "1";
      xmark.style.opacity = "0";
      catalogCard.style.transform = "translateY(0px)";
    }
  } else {
    if (menu.style.opacity == 1 || menu.style.opacity == "") {
      xmark.style.opacity = "1";
      menu.style.opacity = "0";
      catalogCard.style.transform = "translateY(0)";
      catalogCard.style.zIndex = 10;
    } else {
      menu.style.opacity = "1";
      xmark.style.opacity = "0";
      catalogCard.style.transform = "translateY(-400px)";
    }
  }
});

let search = document.getElementById("searchProduct");

const wrapper1 = document.getElementById("wrapper1");
const wrapper = document.getElementById("wrapper");

const products = JSON.parse(localStorage.getItem("products2"));

function all() {
  products.map((product) => {
    wrapper.innerHTML += `
   <div class="cardUp" id="cardUp">
              <div class="card">
                <img
                  src=${product.thumbnail}
                  alt="clothe"
                />
                <p><span>${product.price} $</span><span>1 999 $</span></p>
                <p class="star">
                  <span>4.9</span><img src="img/star.svg" alt="star" />
                  <span>14 отзывов</span>
                </p>
                <p>${product.title}</p>
                <button class="cardDiscount">-25%</button>
                <button class="buyBtn">В корзину</button>
                <button class="view" onclick="view(${product.id})"> <i class="fa-solid fa-eye"></i> </button>
                <button class="like" onclick="liked(${product.id})"> <i class="fa-regular fa-heart red"></i></button>
              </div>
            </div>
  `;
  });
}

all();

// like
const likedBtn = document.querySelector(".like");
const cardProduct = document.querySelector(".card");
const countLike = document.getElementById("countLike");
localStorage.setItem("sum", 0);
function liked(id) {
  products.map((item) => {
    if (item.id == id) {
      var btnLike = document.querySelector(
        `.cardUp:nth-child(${id}) > div > button:last-child > i`
      );
      let sum = JSON.parse(localStorage.getItem("sum"));
      if (btnLike.classList.contains("red")) {
        btnLike.style.color = "red";
        btnLike.classList.remove("red");
        sum += 1;
        localStorage.setItem("sum", JSON.stringify(sum));
      } else {
        btnLike.style.color = "transparent";
        btnLike.classList.add("red");
        let sum2 = JSON.parse(localStorage.getItem("sum"));
        sum2 -= 1;
        sum = sum2;
        localStorage.setItem("sum", JSON.stringify(sum));
      }
    }
  });
  countLike.textContent = JSON.parse(localStorage.getItem("sum"));
}

// like end
function sa(array) {
  array.map((product1) => {
    wrapper1.innerHTML = `
  <div class="cardUp1" id="cardUp" onclick="">
             <div class="card1">
               <img
                 src=${product1.thumbnail}
                 alt="clothe"
               />
               <p><span>Price: </span><span>${product1.price} $</span></p>
               <p class="star">
                 <span>4.9</span><img src="img/star.svg" alt="star" />
                 <span>14 отзывов</span>
               </p>
               <p>${product1.title}</p>
               <p class="details">
                <span> Date of production _ _ _ _ _ _ _ _ ${product1.description.date}</span>
                <span> Brand _ _ _ _ _ _ _ _ ${product1.description.brand}</span>
                <span> Comfotness _ _ _ _ _ _ _ _ ${product1.description.comfotness}</span>
                <span> Design _ _ _ _ _ _ _ _ ${product1.description.design}</span>
               </p>
               <button class="cardClose" onclick="closed()"><i class="fa-solid fa-xmark"></i></button>
               <button class="buyBtn">В корзину</button>
               <button class="view" onclick="view(${product1.id})"> <i class="fa-solid fa-eye"></i> </button>
               <button class="like"><i class="fa-regular fa-heart"></i> </button>
             </div>
           </div>
 `;
  });

  wrapper1.style.zIndex = 12;
}

function closed() {
  wrapper1.style.zIndex = -10;
}

function searchCategory(kelgan) {
  wrapper.innerHTML = "";
  kelgan.map((send) => {
    wrapper.innerHTML += `
   <div class="cardUp">
              <div class="card">
                <img
                  src=${send.thumbnail}
                  alt="clothe"
                />
                <p><span>${send.price} $</span><span>1 999 $</span></p>
                <p class="star">
                  <span>4.9</span><img src="img/star.svg" alt="star" />
                  <span>14 отзывов</span>
                </p>
                <p>${send.title}</p>
                <button class="cardDiscount">-25%</button>
                <button class="buyBtn">В корзину</button>
                <button class="view" onclick="view(${send.id})"> <i class="fa-solid fa-eye"></i> </button>
               <button class="like"><i class="fa-regular fa-heart"></i></button>
              </div>
            </div>
  `;
  });
}

function array(product) {
  const kelgan = products.filter((productcategory) => {
    return productcategory.category == product;
  });

  searchCategory(kelgan);
}

const searchedResults = document.querySelector(".searched-results");
const searchedProducts = document.querySelector(".searched-products");

search.addEventListener("input", function (event) {
  const inputValue = event.target.value.toLowerCase();
  const filtered = products.filter((item) => {
    return item.title.toLocaleLowerCase().includes(inputValue);
  });

  searchedProducts.style.display = "block";

  searchedResults.innerHTML = "";

  filtered.map((product) => {
    searchedResults.innerHTML += `
           <div class="searched-products_cart" onclick="view(${product.id})">
              <div class="searched-product_img">
                <img src=${product.thumbnail} alt="img" />
              </div>
              <h4>${product.title}</h4>
              <p>$${product.price}</p>
            </div>
        `;
  });
  if (inputValue == "") {
    searchedProducts.style.display = "none";
  }
  searchedPro(filtered);
});

function searchedPro(filtered) {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      showAll(filtered);
      searchedProducts.style.display = "none";
      search.value = "";
    }
  });
}

function showAll(filterlangan) {
  if (filterlangan.length > 0) {
    wrapper.innerHTML = "";
    filterlangan.map((product) => {
      wrapper.innerHTML += `
   <div class="cardUp" id="cardUp">
              <div class="card">
                <img
                  src=${product.thumbnail}
                  alt="clothe"
                />
                <p><span>${product.price} $</span><span>1 999 $</span></p>
                <p class="star">
                  <span>4.9</span><img src="img/star.svg" alt="star" />
                  <span>14 отзывов</span>
                </p>
                <p>${product.title}</p>
                <button class="cardDiscount">-25%</button>
                <button class="buyBtn">В корзину</button>
                <button class="view" onclick="view(${product.id})"> <i class="fa-solid fa-eye"></i> </button>
                <button class="like" onclick="liked(${product.id})"> <i class="fa-regular fa-heart red"></i></button>
              </div>
            </div>
  `;
    });
  }
}

function view(id) {
  const id1 = id;
  const see = products.filter((chose) => {
    return chose.id == id1;
  });
  searchedProducts.style.zIndex = "11";
  sa(see);
}
