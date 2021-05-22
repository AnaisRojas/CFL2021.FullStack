function imprimirArregloRec (arreglo, indice, largo) {
    if (indice <= largo) {
        console.log ("posicion", indice, "tiene: ", imprimirArregloRec (arreglo, indice+1, largo));
    };
    return arreglo [indice-1];
}

let readlineSycn = require ("readline-sync");
let n = readlineSycn.questionInt("cantidad de elementos del arreglo: ");
let arreglo = new Array(n);
let indice;

for (indice=0; indice<=n; indice++) {
    arreglo[indice]= indice*2;
}