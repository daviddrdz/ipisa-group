import { productos } from "./data/productos.js";

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const producto = productos.find(p => p.id === id);
    const btn = document.getElementById("boton-info");

    if (btn) {
        btn.addEventListener("click", () => {
            window.location.href = `./contacto.html?id=${producto.id}`
        })
    }

    if (!producto) {
        document.body.innerHTML = `
            <div id="nav"></div>
            <p id="error-buscador">No se encontró el producto</p>
            <div id="footer"></div>
        `;
        return;
    }

    document.getElementById("titulo").textContent = producto.titulo;
    document.getElementById("descripcion").textContent = producto.longDesc;
    document.getElementById("imagen-principal").src = producto.imagen;
    document.getElementById("img1").src = producto.imagen;
    document.getElementById("img2").src = producto.imagen;
    document.getElementById("img3").src = producto.imagen;
    document.getElementById("img4").src = producto.imagen;

})

