const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/api/products", (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
        res.json(data.products);
    } catch (error) {
        console.error("Xatolik:", error.message);
        res.status(500).json({ error: "Mahsulotlarni o‘qishda xatolik yuz berdi." });
    }
});
app.post("/api/products", (req, res) => {
    const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
    const newProduct = {
        id: Date.now(),
        image: req.body.image,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category
    };
    data.products.push(newProduct);
    fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
    res.status(201).json({ message: "Mahsulot qo‘shildi", product: newProduct });
});

app.put("/api/products/:id", (req, res) => {
    const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
    const id = parseInt(req.params.id);
    const index = data.products.findIndex((p) => p.id === id);
    if (index !== -1) {
        data.products[index] = { id, ...req.body };
        fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
        res.json({ message: "Yangilandi", product: data.products[index] });
    } else {
        res.status(404).json({ error: "Topilmadi" });
    }
});

app.delete("/api/products/:id", (req, res) => {
    const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
    const id = parseInt(req.params.id);
    const filtered = data.products.filter((p) => p.id !== id);
    if (filtered.length !== data.products.length) {
        data.products = filtered;
        fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
        res.json({ message: "O‘chirildi" });
    } else {
        res.status(404).json({ error: "Topilmadi" });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Server ishga tushdi: http://localhost:${PORT}`);
});



// function renderBasket() {
//   basketItemsContainer.innerHTML = "";
//   let totalPrice = 0;

//   if (keldi.length === 0) {
//     basketItemsContainer.innerHTML = "<p>Savat bo‘sh</p>";
//     basketTotal.textContent = "0 so'm";
//     return;
//   }

//   keldi.forEach((item, index) => {
//     const count = item.count || 1;
//     const priceUZS = item.price;
//     const totalUZS = priceUZS * count;

//     const itemDiv = document.createElement("div");
//     itemDiv.className = "basket-item";

//     itemDiv.innerHTML = `
//       <div>
//         <img src="${item.image}" alt="rasm bor">
//         <div class="details">
//           <h4>${item.title}</h4>
//           <p>Narxi: <span>${priceUZS.toLocaleString()} so'm</span></p>
//         </div>
//         <div class="mix">
//           <div class="quantity-controls">
//             <button onclick="updateCount(${index}, -1)">-</button>
//             <span id="count-${index}">${count}</span>
//             <button onclick="updateCount(${index}, 1)">+</button>
//           </div>
//           <div class="price" id="price-${index}">${totalUZS.toLocaleString()} so'm</div>
//         </div>
//       </div>
//     `;

//     basketItemsContainer.appendChild(itemDiv);
//     totalPrice += totalUZS;
//   });

//   basketTotal.textContent = `${totalPrice.toLocaleString()} so'm`;
// }

