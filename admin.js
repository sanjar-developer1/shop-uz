document.getElementById("productForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Sahifa yangilanmasin

  const product = {
    title: document.getElementById("productTitle").value,
    image: document.getElementById("productImage").value,
    description: document.getElementById("productDescription").value,
    price: parseFloat(document.getElementById("productPrice").value),
    category: document.getElementById("productCategory").value,
  };

  fetch("http://localhost:3000/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Mahsulot qo‘shildi!");
      document.getElementById("productForm").reset(); // Formani tozalash
    })
    .catch((err) => console.error("Xatolik:", err));
});



// home ga qaytish

const homega = document.querySelector("#home-btn")

homega.addEventListener("click", () => {
  window.location.href = "index.html";
})
