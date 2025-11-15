import { categories } from "/assets/js/data/categories.js";

function redirectCategories(url) {
    window.location.href = url;
}

function renderCategories() {
    const container = document.getElementById("categories");
    for (let i = 0; i < categories.length;i++) {
        let category = document.createElement("div");
        category.className = "category";
        category.onclick = () => redirectCategories(categories[i].url);
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