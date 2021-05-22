let readlineSync = require("readline-sync");
let n = readlineSync.questionInt("Ingrese cantidad de numeros: ");
let v1=new Array(n);

cargarArreglo(v1,n);
invertirArreglo(v1,n);


function cargarArreglo(v1,n){
    let indice;
    let numero=" ";
    for(indice=0; indice<n; indice++){
        v1[indice]=readlineSync.questionInt("Ingrese numero: ");
        numero=numero+" "+v1[indice];
    }console.log(numero);
};

function invertirArreglo(v1,n){
    let indice;
    for(indice= n-1; indice>=0; indice--){
        console.log(v1[indice]+" ");
    }
};