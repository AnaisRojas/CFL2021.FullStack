"use strict";
let button = document.getElementById("tirar");
button = addEventListener("click", tirarDados);
let dado1 = document.getElementById("dado1");
let dado2 = document.getElementById("dado2");
let probabilidad =0;
let Resultados = document.querySelector("#Resultados");





function tirarDados() {
    let n = 1000;
    let num =0;
    for (let contador = 1; contador < n; contador++) {
        let dado1=Math.floor(Math.random()*6)+1;
        let dado2=Math.floor(Math.random()*6)+1;
        console.log(dado1,dado2);
        
        if(dado1+dado2==7){
            num++;
            Resultados.innerHTML="Salio " +num+ " veces el 7.";
        }
    };
    

    
};
