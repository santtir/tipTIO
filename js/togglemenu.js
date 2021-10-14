"use strict"

document.querySelector(".btn-menu").addEventListener("click", desplegarMenu);

function desplegarMenu(){
    document.querySelector(".barranav").classList.toggle("show");
}