import { customers } from "../data/customers.js";

function renderCustomers() {
    const container = document.getElementById("clientes-container");
    for (let i = 0; i < customers.length; ) {
        let row = document.createElement("div");
        row.className = "row d-flex align-items-center";
        for (let j = 0; j < 4 && i < customers.length; i++, j++) {
            let customer = `
                <div class="col d-flex justify-content-center m-2 clientes">
                    <img src="${customers[i].img}">
                </div>
                `;
            row.innerHTML += customer;
        }
        container.appendChild(row);
    }
}

document.addEventListener("DOMContentLoaded", renderCustomers);
