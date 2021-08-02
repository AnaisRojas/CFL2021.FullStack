let readlineSync = require ("readline-sync");
let primerValor = readlineSync.questionInt("ingrese el primer valor: ");
console.log ("el valor es: ", primerValor);
let descuento = readlineSync.questionInt("ingrese porcentaje de descuento: ");
let valorFinal = (primerValor - ((descuento * primerValor) /100));  
console.log (valorFinal);







