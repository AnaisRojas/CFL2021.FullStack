"use strict";
let button = document.getElementById("button");
button.addEventListener("click", contarClick);
let contador = 0;
function contarClick(){ 

    contador = contador++,
    console.log("hiciste" + contador + "clicks");
};
