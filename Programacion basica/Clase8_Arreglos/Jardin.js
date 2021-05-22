//Aula verde  35 bancos    Aula azul  40 bancos    Aula amarilla 30 bancos... 
//pedir a usuario que ingrese cantidad de niños
//segun el numero ingresado, es a que aula puede ingresar

let readlineSync = require("readline-sync");
let cantInfantes = readlineSync.questionInt("Ingrese la cantidad de niños: ");

if (cantInfantes > 40) {
    console.log("No hay aula con esa cantidad de bancos.")
}else if (cantInfantes > 30 && cantInfantes <= 35) {
    console.log("Este grupo debe ir a la sala verde.")
}else if (cantInfantes > 35 && cantInfantes <= 40) {
    console.log("Este grupo debe ir a la sala azul.")
}else if (cantInfantes > 25 && cantInfantes <= 30) {
    console.log("Este grupo debe ir a la sala amarilla.")
}else if (cantInfantes < 25) {
    console.log("Este grupo debe ir a la sala amarilla.")
};

