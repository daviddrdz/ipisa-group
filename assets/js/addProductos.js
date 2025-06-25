function addCards() {
    const container = document.getElementById("cards-container");
    productos.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${p.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${p.titulo}</h5>
                <p class="card-text">${p.descripción}</p>
                <a href="#" class="btn btn-danger">Más información</a>
            </div>
        `;
        container.appendChild(card);
    });
};

document.addEventListener("DOMContentLoaded", addCards());
