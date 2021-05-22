let readlineSync = require("readline-sync");
let n = readlineSync.questionInt("Ingrese un numero: ");
let numeros = new Array(n);
cargarArreglo(numeros, n);
tiposDeNumeros(numeros);


function cargarArreglo(numeros, n) {
    let indice;
    let num = " ";
    for (indice = 0; indice < n; indice++) {
        numeros[indice] = readlineSync.questionInt("Ingrese numero: ");
        num = num + " " + numeros[indice];
    } console.log(num);
};

function tiposDeNumeros() {
    let ceros=0;
    let positivos = 0;
    let negativos = 0;
    switch (numeros) { 
        case cero==0: 
           ceros++
           break 
        case positivos>0: 
           positivos++
           break 
        case negativos>0: 
           negativos++ 
           break 
        default: 
           console.log("La cantidad de positivos es: "+positivos+"La cantidad de negativos es: "+negativos+"y la cantidad de ceros es: "+ceros)
 }
}