export function createCard(producto) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
       <img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.titulo}</h5>
            <p class="card-text">${producto.shortDesc}</p>
            <a href="./producto.html?id=${producto.id}" class="btn btn-danger">Más información</a>
        </div>
    `;
    return card;
}

export function renderCards(productos) {
    const container = document.getElementById("cards-container");
    container.innerHTML = "";
    if (productos.length == 0) {
        container.innerHTML = `
            <p id="error-buscador">No se encontró el producto</p>
        `
        return;
    }
    productos.forEach(p => {
        let card = createCard(p);
        container.appendChild(card);
    });
}
