const basketItemsContainer = document.querySelector(".basket-items");
const basketTotal = document.querySelector(".basket-total");
const hisoblashBtn = document.querySelector(".checkout-btn"); // Hisoblash tugmasi
const homeBtn = document.getElementById("home-btn"); // Qaytish tugmasi

let keldi = JSON.parse(localStorage.getItem("productsBasket")) || [];
const USD_TO_UZS = 12000 / 10; // Dollar kursini 10 ga bo'ldik

function renderBasket() {
  basketItemsContainer.innerHTML = ""; // Savatni tozalash
  let totalPrice = 0;

  if (keldi.length === 0) {
    basketItemsContainer.innerHTML = "<p>Savat bo‘sh</p>";
    basketTotal.textContent = "0 so'm";
    return;
  }

  keldi.forEach((item, index) => {
    const count = item.count || 1;
    const itemDiv = document.createElement("div");
    itemDiv.className = "basket-item";

    itemDiv.innerHTML = `
      <div>
        <img src="${item.images}" alt="rasm bor">
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
  let countElement = document.getElementById(`count-${index}`);
  let priceElement = document.getElementById(`price-${index}`);

  let countValue = Number(countElement.textContent) + change;

  if (countValue < 1) {
    keldi.splice(index, 1); // Mahsulotni o‘chirish
  } else {
    countElement.textContent = countValue;
    keldi[index].count = countValue;

    let newPriceUZS = keldi[index].price * USD_TO_UZS * countValue;
    priceElement.textContent = `${newPriceUZS.toLocaleString()} so'm`;
  }

  let total = keldi.reduce(
    (sum, item) => sum + item.price * USD_TO_UZS * (item.count || 1),
    0
  );
  basketTotal.textContent = `${total.toLocaleString()} so'm`;

  localStorage.setItem("productsBasket", JSON.stringify(keldi));
  renderBasket();
}

// Savatni tozalash funksiyasi
function clearBasket() {
  keldi = [];
  localStorage.removeItem("productsBasket");
  renderBasket();
}

// Hisoblash tugmachasini bosganda tasdiqlash
hisoblashBtn.addEventListener("click", function () {
  let total = keldi.reduce(
    (sum, item) => sum + item.price * USD_TO_UZS * (item.count || 1),
    0
  );

  let isConfirmed = confirm(
    `Sizdan ${total.toLocaleString()} so'm olinadi! Tasdiqlaysizmi?`
  );

  if (isConfirmed) {
    clearBasket(); // Faqat OK bosilganda savat tozalanadi
    alert("Hisob muvaffaqiyatli to'landi!");
  } else {
    alert("Hisoblash bekor qilindi.");
  }
});

// Qaytish tugmachasi ishlashi
homeBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

renderBasket();
