function includeNav() {
    fetch("./assets/components/nav.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("nav").innerHTML = data;
            const path = window.location.pathname.split("/").pop().split(".")[0];
            const navLinks = document.querySelectorAll("#nav a.nav-link");
            const index = document.getElementById("index");

            navLinks.forEach((link) => {
                const href = link.getAttribute("href");
                const trimmedhref = href.substring(href.lastIndexOf("/") + 1, href.lastIndexOf("."));
                if (path == "") {
                    index.classList.add("active-link");
                } else if (trimmedhref.includes(path)) {
                    link.classList.add("active-link");
                }
            });
        })
        .catch((error) => {
            console.error("Error cargando el nav:", error);
        });
}

function includeFooter() {
    fetch("./assets/components/footer.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch((error) => {
            console.error("Error cargando el footer:", error);
        });
}

document.addEventListener("DOMContentLoaded", () => {
    includeNav();
    includeFooter();
});
