let oneProducts = []
fetch("http://localhost:3000/api/products")
  .then((res) => res.json())
  .then((products) => {
    oneProducts = products

    const main = document.querySelector("main");

    if (products.length === 0) {
      main.style.paddingBottom = "0";
    } else {
      allProducts(products);
    }
  }).catch((err) => {

    console.error("Xatolik:", err)
    document.querySelector("main").style.paddingBottom = "0";
  }
  );


function allProducts(products) {
  const wrapper = document.getElementById("wrapper");
  wrapper.innerHTML = "";
  products.forEach((product) => {
    wrapper.innerHTML += `
          <div class="cardUp">
            <div class="card">
              <img src="${product.image}" alt="img" />
              <div class="card-wrapper">
                <p><span>${product.price.toLocaleString("ru-RU")} so'm</span></p>
                <p>${product.title}</p>
                <p>${product.description}</p>
                <button 
                  class="buyBtn" 
                  onclick="addToBasketFromButton(this)" 
                  data-product='${JSON.stringify(product)}'>
                  Savatga
                </button>
              </div>
            </div>
          </div>
        `;
  });
}


// filter category

function filterCategory(category) {
  if (category === "all") {
    allProducts(oneProducts)
  } else {
    const filter = oneProducts.filter(product => product.category === category)
    allProducts(filter)
  }
}


// search input

const searchInput = document.querySelector(".searchHeading")
const ulguring = document.querySelector(".ulguring")

searchInput.addEventListener("input", function (event) {
  const inputValue = event.target.value.toLowerCase().trim();

  const filtered = oneProducts.filter(item => item.title.toLowerCase().includes(inputValue))

  allProducts(filtered)

  if (inputValue === "") {
    allProducts(oneProducts)
    ulguring.textContent = "Harid qilishga ulguring!"
    return
  }


  if (filtered.length > 0) {
    ulguring.textContent = "Siz qidirgan maxsulot"
  } else {
    ulguring.textContent = "Afsuski bunday maxsulot yo'q"
  }

})


// admin kirishi uchun

function goToAdminPage() {
  window.location.href = "login.html";
}

