import { products } from "../data/products.js";
import { renderCards } from "../utils/cardUtils.js";

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("buscador");
    renderCards(products);
    input.addEventListener("input", () => {
        const text = input.value.toLowerCase();
        const filtered = products.filter((p) => p.title.toLowerCase().includes(text));
        renderCards(filtered);
    });
});
