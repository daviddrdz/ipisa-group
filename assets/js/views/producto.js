import { products } from "../data/products.js";

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const product = products.find((p) => p.id === id);
    const botones = document.querySelectorAll(".boton-info")

    botones.forEach(btn => {
        btn.addEventListener("click", () => {
            window.location.href = `./contacto.html?id=${product.id}`;
        })
    })

    if (!product) {
        document.body.innerHTML = `
            <div id="nav"></div>
                <p id="error-buscador">No se encontró el producto</p>
            <div id="footer"></div>
        `;
        return;
    }

    document.getElementById("titulo").textContent = product.title;
    document.getElementById("shortDesc").textContent = product.shortDesc;
    document.getElementById("desc").textContent = product.desc;
    document.getElementById("imagen-principal").src = product.img;
});
