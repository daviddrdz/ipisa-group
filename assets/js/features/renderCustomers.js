import { customers } from "../data/customers.js";

function renderCustomers() {
    const container = document.getElementById("clientes-container");
    for (let i = 0; i < customers.length; i++) {
        container.innerHTML += `
            <div class="clientes">
                <img src="${customers[i].img}">
            </div>
        `;
    }
}

document.addEventListener("DOMContentLoaded", renderCustomers);
