import { productos } from "./data/productos.js";
import { renderCards } from "./cardUtils.js";

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("buscador");
    renderCards(productos);
    input.addEventListener("input", () => {
        const texto = input.value.toLowerCase();
        const filtrados = productos.filter(p =>
            p.titulo.toLowerCase().includes(texto)
        );
        renderCards(filtrados);
    });
});
