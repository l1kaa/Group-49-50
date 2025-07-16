const root = document.getElementById("root");

fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((res) => {
        res.forEach(element => {
            root.innerHTML += `
            <div style = "border: 1px solid black;">
                <p>Title: ${element.title} </p>
                <p>Price: ${element.price} </p>
                <p>Description: ${element.description} </p>
                <img src="${element.image}" width=200>
            </div>`
        });
    })