function redireccionarCard(id) {
    window.location.href = `/productos/producto.html?id=${id}`;
}

export function crearCard(producto) {
    const card = document.createElement("div");
    card.className = "card-producto";
    card.onclick = () => redireccionarCard(producto.id);
    card.innerHTML = `
        <div class="card-producto__img">
            <img src="${producto.img}">
        </div>
        <div class="card-producto__categoria">
            <p>${producto.categoria}</p>
        </div>
        <div class="card-producto__nombre">
            <p>${producto.nombre}</p>
        </div>
        <div class="card-producto__info">
            <button onclick="location.href='/productos/producto.html?id=${producto.id}';">Más información</button>
        </div>
    `;
    return card;
}

export function renderCards(productos) {
    const contenedor = document.getElementById("cards-container");
    contenedor.innerHTML = "";
    if (productos.length == 0) {
        contenedor.innerHTML = `
            <p id="error-buscador">No se encontró el producto</p>
        `;
        return;
    }
    productos.forEach((p) => {
        let card = crearCard(p);
        contenedor.appendChild(card);
    });
}
