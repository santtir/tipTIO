"use strict"
let btn = document.querySelector("#btn-enviar");
btn.addEventListener("click", verificarformulario);

let respuesta = document.querySelector("#respuesta");


function verificarformulario() {
    document.querySelector("#info").innerHTML = "Gracias por su opinion.";
    document.querySelector("#afavor").setAttribute("disabled", "");
    document.querySelector("#encontra").setAttribute("disabled", "");
    btn.setAttribute("disabled", "");

}