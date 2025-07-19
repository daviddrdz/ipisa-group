import { products } from "../data/products.js";

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const product = products.find((p) => p.id === id);

    if (!product) {
        return;
    }

    document.getElementById("mensaje").innerHTML = `Me gustaría obtener más información de ${product.title}`;
});
