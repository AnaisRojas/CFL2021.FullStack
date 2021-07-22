let readlineSync = require("readline-sync");   //Declaro el paquete que voy a usar//
let primerNumero = readlineSync.questionInt("Ingrese un numero a multiplicar: ");   //Le pido al usuario que ingrese un numero a multiplicar//
let segundoNumero = readlineSync.questionInt("Ingrese hasta que numero quiere multiplicar: "); //Le pido al usuario que me diga hasta por que numero hay que multiplicarlo//
let contador = 0;   //Declaro la variable contador y la inicializo en 1, esto quiere decir que arranco multiplicando al primerNumero por 1//
                                        //Si, contador es menor a segundoNumero... //
for (let i = contador; i < segundoNumero; i++) {    //Para variable i que es contador, y mientras que i sea menor que segundoNumero, se va a incrementar i en 1//
    contador = primerNumero * (i + 1)
    console.log("Resultado", contador)
};

