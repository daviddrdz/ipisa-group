import { products } from "/assets/js/data/products.js";
import { renderCards } from "/assets/js/features/renderCards.js";

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("buscador");
    renderCards(products);
    input.addEventListener("input", () => {
        const text = input.value.toLowerCase();
        const filtered = products.filter((p) => p.title.toLowerCase().includes(text));
        renderCards(filtered);
    });
});
