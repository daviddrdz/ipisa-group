import { productos } from "/assets/js/data/productos.js";

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const producto = productos.find((p) => p.id === id);

    if (!producto) {
        return;
    }

    document.getElementById("mensaje").innerHTML = `Estoy interesado en ${producto.categoria} ${producto.nombre}`;
});

/* const botonEnviar = document.getElementById("enviar");
botonEnviar.addEventListener("click", (e) => {
    swal("Correo enviado", "El correo ha sido enviado", "success");
}); */