import { productos } from "./data/productos.js";

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const producto = productos.find((p) => p.id === id);

    if (!producto) {
        return;
    }

    document.getElementById("mensaje").innerHTML = `Me gustaría obtener más información de ${producto.titulo}`;
});
