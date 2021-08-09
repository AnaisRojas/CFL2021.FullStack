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
    let ceros = 0;
    let positivos = 0;
    let negativos = 0;
    let indice;
    for (indice = 0; indice < n; indice++) {
        if (numeros[indice] > 0) {
            positivos++;
        } else if (numeros[indice] < 0) {
            negativos++;
        } else if (numeros[indice] == 0) {
            ceros++;
        }
    } console.log("positivos " + positivos);
    console.log("ceros " + ceros)
    console.log("negativos " + negativos);
};
