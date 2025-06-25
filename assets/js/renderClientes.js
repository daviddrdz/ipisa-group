function renderClientes() {
    const container = document.getElementById("clientes-container");
    for (i = 0; i < clientes.length;) {
        let row = document.createElement("div");
        row.className = "row d-flex align-items-center";
        for (let j = 0; j < 4 && i < clientes.length; i++, j++) {
            let cliente = `
                <div class="col d-flex justify-content-center m-2">
                    <img src="${clientes[i].img}">
                </div>
                `;
            row.innerHTML += cliente
        }
        container.appendChild(row);
    };
}

document.addEventListener("DOMContentLoaded", renderClientes());
