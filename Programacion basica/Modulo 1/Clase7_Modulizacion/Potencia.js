let readlineSync = require("readline-sync");
let base = readlineSync.questionInt("Ingrese la base: ");
let exponente = readlineSync.questionInt("Ingrese exponente: ");
console.log("La potencia es: ", potenciaNumero(base, exponente))
//declaro las variables necesarias y luego  pido que se muestre por consola la funcion

function potenciaNumero(base, exponente) {       //creo la funcion, dentro le declaro una valiable local "numero"..
    let numero = 1;                         //con if le digo que si 
    if (exponente == 0) {
        return 1;
    } else {
        for (let i = 1; i <= exponente; i++) {
            numero = numero * base;
        };
        return numero;
    }
};


