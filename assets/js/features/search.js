import { productos } from "/assets/js/data/productos.js";
import { renderCards } from "/assets/js/features/renderCards.js";

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("buscador");
    renderCards(productos);
    input.addEventListener("input", () => {
        const texto = input.value.toLowerCase();
        const filtered = productos.filter((p) => p.nombre.toLowerCase().includes(texto));
        renderCards(filtered);
    });
});
