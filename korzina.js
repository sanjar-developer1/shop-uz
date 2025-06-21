const basketItemsContainer = document.querySelector(".basket-items");
const basketTotal = document.querySelector(".basket-total");
const homeBtn = document.getElementById("home-btn");

let keldi = JSON.parse(localStorage.getItem("productsBasket")) || [];

function renderBasket() {
  basketItemsContainer.innerHTML = "";
  let totalPrice = 0;

  if (keldi.length === 0) {
    basketItemsContainer.innerHTML = "<p>Savat bo‘sh</p>";
    basketTotal.textContent = "0 so'm";
    return;
  }

  keldi.forEach((item, index) => {
    const count = item.count || 1;
    const priceUZS = item.price;
    const totalUZS = priceUZS * count;

    const itemDiv = document.createElement("div");
    itemDiv.className = "basket-item";

    itemDiv.innerHTML = `
      <div>
        <img src="${item.image}" alt="rasm bor">
        <div class="details">
          <h4>${item.title}</h4>
          <p>Narxi: <span>${priceUZS.toLocaleString()} so'm</span></p>
        </div>
        <div class="mix">
          <div class="quantity-controls">
            <button onclick="updateCount(${index}, -1)">-</button>
            <span id="count-${index}">${count}</span>
            <button onclick="updateCount(${index}, 1)">+</button>
          </div>
          <div class="price" id="price-${index}">${totalUZS.toLocaleString()} so'm</div>
        </div>
      </div>
    `;

    basketItemsContainer.appendChild(itemDiv);
    totalPrice += totalUZS;
  });

  basketTotal.textContent = `${totalPrice.toLocaleString()} so'm`;
}

function updateCount(index, change) {
  let count = keldi[index].count || 1;
  count += change;
  if (count < 1) {
    keldi.splice(index, 1);
  } else {
    keldi[index].count = count;
  }
  localStorage.setItem("productsBasket", JSON.stringify(keldi));
  renderBasket();
}

homeBtn.addEventListener("click", () => {
  window.location.href = "index.html";  
});

renderBasket();


localStorage.setItem("salom", "salom")
