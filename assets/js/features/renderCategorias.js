import { categorias } from "/assets/js/data/categorias.js";

function redirectCategorias(url) {
    window.location.href = url;
}

function renderCategorias() {
    const container = document.getElementById("categorias");
    for (let i = 0; i < categorias.length;i++) {
        let categoria = document.createElement("div");
        categoria.className = "categoria";
        categoria.onclick = () => redirectCategorias(categorias[i].url);
        categoria.innerHTML = `
            <img src="${categorias[i].img}" class="categoria__img" alt="${categorias[i].nombre}">
            <p class="categoria__nombre">${categorias[i].nombre}</p>
        `;
        container.appendChild(categoria);
    }
}

document.addEventListener("DOMContentLoaded", renderCategorias);