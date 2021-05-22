let readlineSync = require("readline-sync");
let n = readlineSync.questionInt("Ingrese la cantidad de jugadores: ");
let edad = new Array(n);
let indice = 0;
let contador = 0;
let suma=0;
for (indice = 0; indice < n; indice++) {
    edad[indice] = Math.floor(Math.random() * (7 - 3 + 1) + 3);   //esta es una forma fija, seria: Math.floor(Math.random()*(N-M+1)+M) ; DONDE M ES MENOR QUE N, AMBOS VALORES SE VAN A INCLUIR
    suma+=edad[indice]
    contador++
}
console.log("Las edades son: ", edad)
console.log("El promedio de edades es: " ,suma / contador );
