"use strict"



document.querySelector("#btn_agregar").addEventListener("click", agregar);

document.querySelector("#btn_agregarx3").addEventListener("click", agregarx3);

document.querySelector("#btn_vaciartabla").addEventListener("click", vaciartabla);


let listado_posiciones = [{
    posicion: "1",
    equipo: "Barcelona SC",
    puntos: "13"
}, {
    posicion: "2",
    equipo: "Boca Juniors",
    puntos: "10"
}, {
    posicion: "3",
    equipo: "Santos",
    puntos: "7",
}, {
    posicion: "4",
    equipo: "The Strongest",
    puntos: "7"
}]

mostrar();

function agregar() {
    let input_posicion = document.querySelector("#input_posicion").value;

    let input_equipo = document.querySelector("#input_equipo").value;

    let input_puntos = document.querySelector("#input_puntos").value;

    let parrafo_alerta = document.querySelector("#alerta");

    let nuevo_item = {
        posicion: input_posicion,
        equipo: input_equipo,
        puntos: input_puntos,
    }

    listado_posiciones.push(nuevo_item);
    if (input_posicion == "" || input_equipo == " " || input_puntos == "") {
        parrafo_alerta.innerHTML = "Nada para agregar."

    }
    else {
        mostrar();
    }

}



function agregarx3() {
    const n=3;
    for(let i=0; i<n;i++){
        agregar();
    }

}



function vaciartabla() {
    tabladinamica.innerHTML = " ";
    listado_posiciones=[];
}



function mostrar() {

    let tabladinamica = document.querySelector("#tabladinamica");
    tabladinamica.innerHTML = "";
    for (let i = 0; i < listado_posiciones.length; i++) {
        tabladinamica.innerHTML +=
            "<tr>" +
            "<td>" + listado_posiciones[i].posicion + "</td>" +
            "<td>" + listado_posiciones[i].equipo + "</td>" +
            "<td>" + listado_posiciones[i].puntos + "</td>" +
            "</tr>";
    }
}

