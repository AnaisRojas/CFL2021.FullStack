"use strict"
//VARIABLES
let cargarInput = document.querySelector(".cargar");  //capturo el input 

let guardarTarea = document.getElementById("guardarTarea");  //capturo el boton para guardar tarea

guardarTarea.addEventListener("click", guardar);  //le doy a ese boton la funcion de guardar cada que se clickee

let lista = document.getElementById("lista");  // capturo el elemento lista

let limpiarLista = document.getElementById("limpiarLista"); //capturo el boton eliminar
limpiarLista.addEventListener("click", borrarLista);  //le doy a ese boton la funcion de borrar lista cada que se clickee

 



//FUNCIONES
function guardar() {
    //si el boton guardar es clickeado...
    if (onclick = guardarTarea) {
        // console.log(cargarInput.value);
        //declaro una variable y en ella creo un elemento "li" en el html...
        let newText = document.createElement("li");
        //digo que el contendido de este elemento recien creado va 
        //a ser el valor que le di a "cargar input", osea lo que puse en el input
        newText.textContent = cargarInput.value;
        // hago que ese contenido sea hijo de el elemento "lista" que ya esta creado en el html
        lista.appendChild(newText);
        //el input se vacia
        cargarInput.value = " ";
    }
};


//declaro la funcion borrarLista
function borrarLista() {
    //cada que el boton "limpiarLista sea clickeado..."
        if (onclick = limpiarLista) {
            //elimino del cuerpo de la pagina el elemento lista, y todos sus hijos
            lista.remove()
            
        }
  
};