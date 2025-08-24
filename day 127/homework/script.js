const productList = document.getElementById("product-list");

// Fetch products 
fetch("https://fakestoreapi.com/products?limit=6")
    .then(response => response.json())
    .then(data => {
        productList.innerHTML = "";
        data.forEach(product => {
        const item = document.createElement("div");
        item.classList.add("product");
        item.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
            <button>Add to Cart</button>
        `;
        productList.appendChild(item);
        });
    })
    .catch(error => {
        productList.innerHTML = "<p> Failed to load products.</p>";
        console.error("Error fetching products:", error);
    });
