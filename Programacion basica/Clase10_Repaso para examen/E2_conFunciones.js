let readlineSync = require("readline-sync");
let n = readlineSync.questionInt("Ingrese la cantidad de jugadores: ");
let edad = new Array(n);

cargarArreglo(edad,n);
mostrarArreglo(edad,n);
promedio=obtenerPromedio(edad,n);
console.log("El promedio de edades es: ", promedio)

function Aleatorio(min, max){
   return Math.floor(Math.random() * (max - min + 1) + min);
};
function cargarArreglo(edad,n){
    let indice = 0;
    for (indice = 0; indice < n; indice++) {
        edad[indice] = Aleatorio(3,7);   //esta es una forma fija, seria: Math.floor(Math.random()*(N-M+1)+M) ; DONDE M ES MENOR QUE N, AMBOS VALORES SE VAN A INCLUIR
    }
};
function mostrarArreglo(edad,n){
    let indice=0;
    for(indice=0; indice<n; indice++){
        console.log(" ",edad[indice])
    }
};

function obtenerPromedio(edad,n){
    let promedio=0;
    let suma=0;
    let indice;
    for(indice=0; indice<n; indice++){
        suma=suma+edad[indice]
    }promedio=suma/n;       //para que esto se vea, sea un valor si definido, tengo que poner el return dentro de la funcion, jeje
    return promedio;
};

