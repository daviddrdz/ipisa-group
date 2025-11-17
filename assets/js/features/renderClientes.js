import { clientes } from "/assets/js/data/clientes.js";

function renderClientes() {
    const contenedor = document.getElementById("clientes-container");
    for (let i = 0; i < clientes.length; i++) {
        contenedor.innerHTML += `
            <div class="clientes">
                <img src="${clientes[i].img}" alt="${clientes[i].nombre}">
            </div>
        `;
    }
}

document.addEventListener("DOMContentLoaded", renderClientes);
