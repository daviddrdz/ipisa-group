function botonContacto() {
    window.location.href = "./contacto.html";
}

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.display = "none";
    }
});
