"use strict";
let button=document.getElementById("button");
button.addEventListener("click", estilosAleatorios);
let divOculto=document.getElementById("divOculto");


function estilosAleatorios(){
    let pink = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);

    divOculto.style.background=`rgb(${pink}, ${blue}, ${green})`;
    // console.log();

    //""+pink+""+blue+""+green

}