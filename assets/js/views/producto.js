import { products } from "../data/products.js";

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const product = products.find((p) => p.id === id);
    const btn = document.getElementById("boton-info");

    if (btn) {
        btn.addEventListener("click", () => {
            window.location.href = `./contacto.html?id=${product.id}`;
        });
    }

    if (!product) {
        document.body.innerHTML = `
            <div id="nav"></div>
                <p id="error-buscador">No se encontró el producto</p>
            <div id="footer"></div>
        `;
        return;
    }

    document.getElementById("titulo").textContent = product.title;
    document.getElementById("descripcion").textContent = product.longDesc;
    document.getElementById("imagen-principal").src = product.img;
    document.getElementById("img1").src = product.img;
    document.getElementById("img2").src = product.img;
    document.getElementById("img3").src = product.img;
    document.getElementById("img4").src = product.img;
});
