let readlineSync = require('readline-sync');

let palabra = readlineSync.question("Ingrese la palabra a invertir:");
let cantidadLetras = palabra.length;

// console.log("Cargando vector");
// cargarVector(palabra, cantidadLetras);


console.log("Mostrando invertido");
mostrarVectorInvertido(palabra, cantidadLetras);

console.log("Invierto los valores en el vector");
invertirVector(palabra, cantidadLetras);

console.log("Mostrando vector");
mostrarVector(palabra, cantidadLetras);