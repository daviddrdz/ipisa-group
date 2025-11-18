import { productos } from "/assets/js/data/productos.js";

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const producto = productos.find((p) => p.id === id);
    const botones = document.querySelectorAll(".boton-info")

    botones.forEach(btn => {
        btn.addEventListener("click", () => {
            window.location.href = `/contacto.html?id=${producto.id}`;
        })
    })

    if (!producto) {
        document.body.innerHTML = `
            <div id="nav"></div>
                <p id="error-buscador">No se encontró el producto</p>
            <div id="footer"></div>
        `;
        return;
    }

    document.getElementById("nombre").textContent = producto.nombre;
    document.getElementById("descCorta").textContent = producto.descCorta;
    const contenedorDescripcion = document.getElementById("desc");
    producto.desc.forEach(texto => {
        const p = document.createElement("p");
        p.className = "producto-resumen__parrafo";
        p.textContent = texto;
        contenedorDescripcion.appendChild(p);
    })
    document.getElementById("imagen").src = producto.img;
});
