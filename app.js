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

const products = [
  {
    id: 1,
    title: "Apple MacBook Pro 14 Inch Space Grey",
    price: 1999.99,
    category: "laptop",
    description: {
      date: 2021,
      comfotness: "Comfotable",
      brand: "Iphone",
      design: "Amazing",
    },
    thumbnail:
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
  },

  {
    id: 2,
    title: "Apple Airpods",
    price: 129.99,
    category: "headphone",
    description: {
      date: 2018,
      comfotness: "Relief",
      brand: "Iphone",
      design: "Amazing",
    },
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
  },

  {
    id: 3,
    title: "iPhone X",
    price: 899.99,
    category: "smartphone",
    description: {
      date: 2020,
      comfotness: "Convenient",
      brand: "Iphone",
      design: "Spectacular",
    },
    thumbnail:
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png",
  },

  {
    id: 4,
    title: "iPhone 6",
    price: 299.99,
    category: "smartphone",
    description: {
      date: 2021,
      comfotness: "Ease",
      brand: "Iphone",
      design: "Brilliant",
    },
    thumbnail: "./images/iphone6.webp",
  },

  {
    id: 5,
    title: "Samsung Galaxy S8",
    price: 499.99,
    category: "smartphone",
    description: {
      date: 2019,
      comfotness: "Satisfaction",
      brand: "Samsung",
      design: "Fabulous",
    },
    thumbnail: "./images/samsung8.webp",
  },

  {
    id: 6,
    title: "Huawei Matebook X Pro",
    price: 1399.99,
    category: "laptop",
    description: {
      date: 2020,
      comfotness: "Contentment",
      brand: "Huawei",
      design: "Marvelous",
    },
    thumbnail:
      "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png",
  },

  {
    id: 7,
    title: "Nike Air Jordan 1 Red And Black",
    price: 149.99,
    category: "clothes",
    description: {
      date: 2023,
      comfotness: "Serenity",
      brand: "Nike",
      design: "Incredible",
    },
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/thumbnail.png",
  },

  {
    id: 8,
    title: "Man Plaid Shirt",
    price: 34.99,
    category: "clotheMen",
    description: {
      date: 2024,
      comfotness: "Relaxation",
      brand: "Gucci",
      design: "Fantastic",
    },
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/thumbnail.png",
  },

  {
    id: 9,
    title: "Samsung Galaxy Tab S8 Plus Grey",
    price: 599.99,
    category: "tablet",
    description: {
      date: 2022,
      comfotness: "Well-being",
      brand: "Samsung",
      design: "Outstanding",
    },
    thumbnail:
      "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/thumbnail.png",
  },

  {
    id: 10,
    title: "Sports Sneakers Off White Red",
    price: 109.99,
    category: "sport",
    description: {
      date: 2020,
      comfotness: "Cozy",
      brand: "Nike",
      design: "Astonishing",
    },
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/thumbnail.png",
  },

  {
    id: 11,
    title: "Samsung Galaxy S10",
    price: 699.99,
    category: "smartphone",
    description: {
      date: 2019,
      comfotness: "Convenience",
      brand: "Samsung",
      design: "Remarkable",
    },
    thumbnail: "./images/samsungs10.webp",
  },

  {
    id: 12,
    title: "Apple Airpods",
    price: 129.99,
    category: "headphone",
    description: {
      date: 2023,
      comfotness: "Satisfaction",
      brand: "Iphone",
      design: "Astonishing",
    },
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
  },

  {
    id: 13,
    title: "Sports Sneakers Off White & Red",
    price: 119.99,
    category: "sport",
    description: {
      date: 2022,
      comfotness: "Comfort",
      brand: "Nike",
      design: "Fabulous",
    },
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/thumbnail.png",
  },

  {
    id: 14,
    title: "Oppo F19 Pro+",
    price: 399.99,
    category: "smartphone",
    description: {
      date: 2018,
      comfotness: "Well-being",
      brand: "Oppo",
      design: "Incredible",
    },
    thumbnail:
      "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro+/thumbnail.png",
  },

  {
    id: 15,
    title: "Blue & Black Check Shirt",
    price: 29.99,
    category: "clotheMen",
    description: {
      date: 2020,
      comfotness: "Cozy",
      brand: "Nike",
      design: "Astonishing",
    },
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/thumbnail.png",
  },

  {
    id: 16,
    title: "Huawei Matebook X Pro",
    price: 1399.99,
    category: "laptop",
    description: {
      date: 2024,
      comfotness: "Relaxation",
      brand: "Huawei",
      design: "Brilliant",
    },
    thumbnail:
      "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png",
  },

  {
    id: 17,
    title: "Apple MacBook Pro 14 Inch Space Grey",
    price: 1999.99,
    category: "laptop",
    description: {
      date: 2023,
      comfotness: "Cozy",
      brand: "Iphone",
      design: "Fantastic",
    },
    thumbnail:
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
  },

  {
    id: 18,
    title: "Apple Airpods",
    price: 129.99,
    category: "smartphone",
    description: {
      date: 2022,
      comfotness: "Relief",
      brand: "Iphone",
      design: "Brilliant",
    },
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
  },

  {
    id: 19,
    title: "iPhone X",
    price: 899.99,
    category: "smartphone",
    description: {
      date: 2020,
      comfotness: "Convenient",
      brand: "Iphone",
      design: "Remarkable",
    },
    thumbnail:
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png",
  },
  {
    id: 20,
    title: "T-shirt",
    price: 1999,
    thumbnail: "./img/clothe1.png",
    category: "clotheMen",
    description: "Футболка с дизайнерским принтом Super Shape 02 фиолетовая",
    discountPrice: "25%",
    discount: "2 499",
  },
  {
    id: 21,
    title: "T-shirt",
    price: 3179,
    thumbnail: "./img/clothe2.png",
    category: "clotheMen",
    description: {
      date: 2019,
      comfotness: "Contentment",
      brand: "Nike",
      design: "Marvelous",
    },
    discountPrice: "25%",
    discount: 1999,
  },
  {
    id: 22,
    title: "Cap",
    price: 1375,
    thumbnail: "./img/cap1.png",
    category: "clotheMen",
    description: {
      date: 2024,
      comfotness: "Well-being",
      brand: "Nike",
      design: "Incredible",
    },
    discountPrice: "25%",
    discount: 1999,
  },

  {
    id: 23,
    title: "T-shirt",
    price: 2399,
    category: "clotheMen",
    description: {
      date: 2023,
      comfotness: "Convenient",
      brand: "Nike",
      design: "Spectacular",
    },
    thumbnail: "./img/id23.png",
  },

  {
    id: 24,
    title: "T-shirt",
    price: 1375,
    category: "clotheMen",
    description: {
      date: 2020,
      comfotness: "Relaxation",
      brand: "Nike",
      design: "Satisfaction",
    },
    thumbnail: "./img/id24.png",
  },

  {
    id: 25,
    title: "T-shirt",
    price: 2399,
    category: "clotheMen",
    description: {
      date: 2021,
      comfotness: "Cozy",
      brand: "Nike",
      design: "Astonishing",
    },
    thumbnail: "./img/id25.png",
  },

  {
    id: 26,
    title: "iphone 12",
    price: 1375,
    category: "smartphone",
    description: {
      date: 2023,
      comfotness: "Serenity",
      brand: "Iphone",
      design: "Fabulous",
    },
    thumbnail: "./img/id26.png",
  },

  {
    id: 27,
    title: "iphone 12",
    price: 1999,
    category: "smartphone",
    description: {
      date: 2022,
      comfotness: "Cozy",
      brand: "Iphone",
      design: "Astonishing",
    },
    thumbnail: "./img/id27.png",
  },

  {
    id: 28,
    title: "Cap",
    price: 599,
    category: "clotheMen",
    description: {
      date: 2021,
      comfotness: "Cozy",
      brand: "Nike",
      design: "Brilliant",
    },
    thumbnail: "./img/id23.png",
  },

  {
    id: 29,
    title: "iphone 14",
    price: 2399,
    category: "smartphone",
    description: {
      date: 2020,
      comfotness: "Cozy",
      brand: "Iphone",
      design: "Astonishing",
    },
    thumbnail: "./img/id29.png",
  },

  {
    id: 30,
    title: "iphone 13",
    price: 3179,
    category: "clotheMen",
    description: {
      date: 2020,
      comfotness: "Comfotable",
      brand: "iphone",
      design: "Fabulous",
    },
    thumbnail: "./img/id30.png",
  },
];

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
