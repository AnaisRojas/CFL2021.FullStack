let readlineSync = require("readline-Sync");
let cantTotal = 0;
let cantPositivos = 0;
let porcenPositivos = 0;
let num = readlineSync.questionInt("Ingrese un numero: ");
while (num != 0) {
    if (num > 0) {
        cantPositivos++;
    }
    cantTotal++;
    num = readlineSync.questionInt("Ingrese un numero: ");
}
porcenPositivos = ((cantPositivos * 100) / cantTotal);
console.log("La cantidad de numeros positivos que ingreso fue: ", cantPositivos, "Y el porcentaje de los mismos: ", porcenPositivos);
