"use strict";
function ActualizarSaludo() {
    let nodoInput = document.getElementById("txtNombre");
    let nombre = nodoInput.value;
    console.log(nombre);
    let nodoSaludo = document.getElementById("txtSaludo")
    nodoSaludo.innerHTML = "Hola " + nombre;
};

