function redirectCard(id) {
    window.location.href = `./producto.html?id=${id}`;
}

export function createCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.onclick = () => redirectCard(product.id);
    card.innerHTML = `
        <div class="image">
            <img src="${product.img}">
        </div>
        <div class="category">
            <p>${product.category}</p>
        </div>
        <div class="title">
            <p>${product.title}</p>
        </div>
        <div class="info">
            <button onclick="location.href='./producto.html?id=${product.id}';">Más información</button>
        </div>
    `;
    return card;
}

export function renderCards(products) {
    const container = document.getElementById("cards-container");
    container.innerHTML = "";
    if (products.length == 0) {
        container.innerHTML = `
            <p id="error-buscador">No se encontró el producto</p>
        `;
        return;
    }
    products.forEach((p) => {
        let card = createCard(p);
        container.appendChild(card);
    });
}
