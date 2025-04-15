// hacer que el boton de busqueda despliegue la barra de busqueda
// campos de texto que se auto rellenan

const botonheader = document.getElementById("boton-header");
const inputheader  = document.getElementById("input-header");
const titulo = document.getElementById("titulo-header");
const originalwidth = window.getComputedStyle(inputheader).width;
let buildin = ""

let contador = true;




let texto = "TONOFLIX"
texto.split("").forEach((letra,indice) => {
    const span = document.createElement('span')
    span.textContent = letra
    span.classList.add("animacion")
    span.style.animationDelay = `${indice * 0.1}s`

    if (indice >= 4){
        span.style.color = "#8b0000"
    }
    titulo.appendChild(span)
})



botonheader.addEventListener("click", () => {
    inputheader.classList.toggle('active');

    if (inputheader.classList.contains("active")) {
        inputheader.focus();
    } else {
        inputheader.blur();
    }
});
