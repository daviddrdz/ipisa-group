export function createCard(product) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
       <img src="${product.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title fs-5">${product.title}</h5>
            <p class="card-text fs-6">${product.category}</p>
            <a href="./producto.html?id=${product.id}" class="btn btn-danger fs-6">Más información</a>
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
