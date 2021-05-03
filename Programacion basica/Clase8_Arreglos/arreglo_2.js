let readlineSync = require("readline-sync");
let dimension = readlineSync.questionInt ("ingrese cuantos espacios quiere: ");
let num = new Array(dimension);
let resultado = 0;
for (i = 0; i < dimension; i++) {
    num [i]= readlineSync.questionInt("Ingrese un numero: ")
    resultado+= num [i];
}
console.log (num);
console.log(resultado);
