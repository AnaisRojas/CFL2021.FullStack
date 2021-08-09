let n = 5;
let butacasCine = new Array(n);

cargarArrayRandom(butacasCine, n);
identificarTrueOrFalse(butacasCine, n)



function Aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function cargarArrayRandom(v, n) {
    let indice = 0;
    for (indice = 0; indice < n; indice++) {
        v[indice] = Aleatorio(0, 1);
    } console.log(v)
};



function identificarTrueOrFalse(v,n) {
    let contadorOcupadas = 0;
    let contadorVacias = 0;
    let indice;

    for (indice = 0; indice < n; indice++) {
        if (v[indice]== 1) {
            contadorOcupadas++;
        } else if (v[indice] == 0) {
            contadorVacias++;
        }
    } console.log("Hay ",contadorOcupadas," butacas ocupadas, y ",contadorVacias," butacas vacias.")
};

