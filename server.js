const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// GET - Barcha mahsulotlar
app.get("/api/products", (req, res) => {
    const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
    res.json(data.products);
});

// POST - Yangi mahsulot
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

// PUT - Tahrirlash
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

// DELETE - O‘chirish
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
