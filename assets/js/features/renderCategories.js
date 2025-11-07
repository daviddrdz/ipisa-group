import { categories } from "../data/categories.js";

function renderCategories() {
    const container = document.getElementById("categories");
    for (let i = 0; i < categories.length;i++) {
        let category = document.createElement("div");
        category.className = "category";
        category.innerHTML = `
            <div class="image">
                <img src="${categories[i].img}">
            </div>
            <div class="title">
                <p>${categories[i].category}</p>
            </div>
        `
        container.appendChild(category);
    }
}

document.addEventListener("DOMContentLoaded", renderCategories);