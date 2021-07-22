let readlineSync = require("readline-sync");
let n = 6;
let v1 = new Array(n);
let v2 = new Array(n);
let vSuma = new Array(n);
cargarArreglo(v1,n);

cargarArreglo(v2,n);

sumarArreglo(v1,v2,vSuma,n);






function cargarArreglo(v,n){
    let indice;
    let num=" ";
    for(indice=0; indice<n; indice++){
        v[indice]=readlineSync.questionInt("Ingrese el numero: ")
        num=num+" "+v[indice];
    }console.log(num);
};

function sumarArreglo(v1,v2,vSuma,n){
    let indice;
    let resultado=" ";
    for(indice=0; indice<n; indice++){
        vSuma[indice]=v1[indice]+v2[indice];
        resultado=resultado+" "+vSuma[indice];
    }console.log(resultado);
}