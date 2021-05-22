//ESTO ES UNA PLANTILLA
function mostrarVectorInvertido(v, cantidad) {

    let indice;

    for (indice = cantidad - 1; indice >= 0; indice--) {

        console.log(v[indice], " ");

    }
}; 


function invertirVector(v, cantidad) {
    let indiceIzq = 0;
    let indiceDer = cantidad - 1;
    let aux;
    while (indiceIzq < indiceDer) {
        aux = v[indiceIzq];
        v[indiceIzq] = v[indiceDer];
        v[indiceDer] = aux;
        indiceIzq++;
        indiceDer--;
    }
};


