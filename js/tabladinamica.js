"use strict"

const url = "https://60d3a38a61160900173c9832.mockapi.io/posiciones";
let tablarest = document.querySelector("#tablarest");
document.querySelector("#btn_agregar").addEventListener("click", enviarDatos);
let posicion = document.querySelector("#input_posicion");
let equipo = document.querySelector("#input_equipo");
let puntos = document.querySelector("#input_puntos");
let id = 0;
let btn_confirmar_edicion = document.querySelector("#btn_confirmar_edicion");
let btn_agregar = document.querySelector("#btn_agregar");
let btn_buscar = document.querySelector("#btn_buscar").addEventListener("click", function () {
    input_busquedad.classList.remove("esconder");
});
let input_busquedad = document.querySelector("#input_buscar");
input_busquedad.addEventListener("keyup", filtrado);
let arreglo_datos = [];


async function obtenerDatos() {
    try {
        let res = await fetch(url);
        let json = await res.json();
        console.log(json);
        arreglo_datos = json;
        mostrar_tabla(json);
    } catch (error) {
        console.log(error)
    }
}

function mostrar_tabla(json) {
    tablarest.innerHTML = "";
    for (const tabla of json) {
        let posicion = tabla.posicion;
        let equipo = tabla.equipo;
        let puntos = tabla.puntos;
        id = tabla.id;
        tablarest.innerHTML +=
            `<tr>
        <td>${posicion}</td>
        <td>${equipo}</td>
        <td>${puntos}</td>
        <td><button id=${tabla.id} class="btn_eliminar">Eliminar</button>
        <td><button id=${tabla.id} class="btn_editar">Editar</button>
        </tr>`
    }
    let botones_eliminar = document.querySelectorAll(".btn_eliminar");
    let botones_editar = document.querySelectorAll(".btn_editar");

    for (const boton of botones_eliminar) {
        boton.addEventListener("click", () => eliminar(boton.id));
    }

    for (const btn_editar of botones_editar) {
        btn_editar.addEventListener("click", () => mostrar_btn_editar(btn_editar.id));
    }
}
obtenerDatos();


async function enviarDatos() {

    let posiciones = {
        "posicion": posicion.value,
        "equipo": equipo.value,
        "puntos": puntos.value
    };
    try {
        let res = await fetch(url, {
            "method": "POST",
            "headers": { "Content-Type": "application/json" },
            body: JSON.stringify(posiciones)
        });
        if (res.ok) {
            console.log("Enviado Correctamente");
        } else {
            console.log("Hubo un error al enviar");
        }
    } catch (error) {
        console.log(error);

    }
    reset_inputs();
    obtenerDatos();
}

async function eliminar(id) {
    try {
        let res = await fetch(`${url}/${id}`, {
            "method": "DELETE"
        });
        if (res.ok) {
            console.log("Eliminado con exito");
        }
        else {
            console.log("Hubo un problema al eliminar");
        }

    } catch (error) {

    }
    obtenerDatos();
}


function mostrar_btn_editar(id) {

    btn_confirmar_edicion.classList.remove("esconder");
    btn_agregar.classList.add("esconder");
    btn_confirmar_edicion.addEventListener("click", () => enviar_modificacion(id));
}


async function enviar_modificacion(id) {
    btn_confirmar_edicion.classList.add("esconder");
    btn_agregar.classList.remove("esconder");

    let posiciones = {
        "posicion": posicion.value,
        "equipo": equipo.value,
        "puntos": puntos.value
    };

    try {
        let res = await fetch(`${url}/${id}`, {
            "method": "PUT",
            "headers": { "Content-type": "application/json" },
            "body": JSON.stringify(posiciones)
        });
        if (res.ok) {
            console.log("Eliminado con exito");
        }
        else {
            console.log("Hubo un problema al eliminar");
        }

    } catch (error) {
        console.log(error);
    }
    

}
function filtrado() {
    let arreglo_aux = [];

    for (let e = 0; e < arreglo_datos.length; e++) {
        if (arreglo_datos[e].equipo.includes(input_busquedad.value)) {
            arreglo_aux.push(arreglo_datos[e]);
        }
    }
    mostrar_tabla(arreglo_aux)

}

function reset_inputs(){
    posicion.value="";
    equipo.value="";
    puntos.value="";
}




