let readlineSync = require("readline-sync");
let nombre = readlineSync.question("Ingrese el nombre del alumnx o Enter para terminar: ");
let practica, teorica, problemas, notaFinal;

while (nombre != " ") {

    practica = readlineSync.questionFloat("Ingrese la nota practica del alumnx: ");
    teorica = readlineSync.questionFloat("Ingrese la nota teorica del alumnx: ");
    problemas = readlineSync.questionFloat("Ingrese la nota de problemas del alumnx: ");
    if ((practica <= 10 && practica >= 0) && (problemas <= 10 && problemas >= 0) &&
        (teorica <= 10 && teorica >= 0)) {
        console.log("La nota final de ", nombre, "es :", (notaFinal = (practica * 0.10) + (teorica * 0.40) + (problemas * 0.50)))
        nombre = readlineSync.question("Ingrese el nombre del alumnx o Enter para terminar: ");
    } 
}; console.log ("Gracias por su visita")

