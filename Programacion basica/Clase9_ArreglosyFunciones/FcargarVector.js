//ESTO ES UNA PLANTILLA
function cargarVector(v, cantidad) {

    let indice;

    for (indice = 0; indice < cantidad; indice++) {

        v[indice] = readlineSync.questionInt("Ingrese el valor en ", indice, ": ");

    }
}; 

