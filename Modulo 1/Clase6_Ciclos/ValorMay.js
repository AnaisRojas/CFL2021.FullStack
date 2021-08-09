let readlineSync = require("readline-sync");
let valor = readlineSync.questionInt("Ingrese un valor: ");
let mayor = valor;
while(valor!=0){
    if(valor>mayor){
        mayor=valor
    }
    valor = readlineSync.questionInt("Ingrese un valor: ");
}
    console.log ("El mayor es: ", mayor)
//Para que sea el valor minimo, solo cambio el signo //

