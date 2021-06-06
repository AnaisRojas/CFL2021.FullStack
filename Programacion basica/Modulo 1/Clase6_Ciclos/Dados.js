let readlineSync = require("readline-sync");
let n = readlineSync.questionInt("¿Cuantas veces va a tirar?");
let probabilidadCara = 1 / 6;
let probabilidadFinal = 1;
let contador;
for (contador = 1; contador <= n; contador++) {
    probabilidadFinal = probabilidadCara * contador;
};
console.log ("Su probabilidad es: " ,  probabilidadFinal)