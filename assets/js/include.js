function includeNav() {
  fetch("./assets/components/nav.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("nav").innerHTML = data;
      const path = window.location.pathname.split("/").pop();
      const navLinks = document.querySelectorAll("#nav a.nav-link");

      navLinks.forEach(link => {
        const href = link.getAttribute("href");
        const trimmedhref = href.slice(2);

        if (trimmedhref === path) {
          link.classList.add("active-link");
        }
      });
    })
    .carch(error => {
      console.error("Error cargando el nav:", error);
    })
}

function includeFooter() {
  fetch("./assets/components/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(error => {
      console.error("Error cargando el footer:", error);
    });
}

document.addEventListener("DOMContentLoaded", includeNav)
document.addEventListener("DOMContentLoaded", includeFooter)
