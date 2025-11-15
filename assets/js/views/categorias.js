let texto = document.getElementById("texto");
let boton = document.getElementById("botonMostrar");

boton.addEventListener("click", () => {
    texto.classList.toggle("expandido");

    if (texto.classList.contains("expandido")) {
        texto.style = "background: none;"
        boton.innerHTML = "<i class='bx  bx-arrow-up-stroke'    ></i> Mostrar menos";
    } else {
        texto.style = "background: linear-gradient(to bottom, transparent, #e0e0e0);"
        boton.innerHTML = "<i class='bx  bx-arrow-down-stroke'    ></i>  Mostrar más";
    }
})