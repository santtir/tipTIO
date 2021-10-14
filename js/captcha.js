"use strict";
let nombre = document.querySelector("#nombre");
let correo = document.querySelector("#correo");
let respuesta = document.querySelector("#respuesta");
let formCaptcha = document.querySelector("#form-captcha");



let btncaptcha = document.querySelector("#btn-captcha");
btncaptcha.addEventListener("click", validarcaptcha);



function validarcaptcha() {

    if (nombre.value === "" || correo.value === "") {
        respuesta.innerHTML = "Verifique que el nombre o el correo esten escritos. ";
    }



    else if (formCaptcha.value === "16") {
        respuesta.innerHTML = "Los datos han sido enviados correctamente, en breve comenzara a recibir informacion adicional";


    }

    else {
        respuesta.innerHTML = "Captcha incorrecto";
    }

}
