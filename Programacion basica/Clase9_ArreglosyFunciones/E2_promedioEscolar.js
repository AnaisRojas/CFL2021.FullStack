let readlineSync = require("readline-sync");
let n = readlineSync.questionInt("Ingrese el numero de estudiantes a evaluar: ");
let estudiante = new Array(n);
let v1 = new Array(n);
let v2 = new Array(n);
let v3 = new Array(n);
let vPromedioEscolar = new Array(n);
cargarArregloEstudiante(estudiante, n)
cargarArreglo(v1, n)
cargarArreglo(v2, n)
cargarArreglo(v3, n)
sacarPromedio(estudiante, v1, v2, v3, vPromedioEscolar, n)



//FUNCIONES
function cargarArreglo(v, n) {
    let indice;
    let num = " ";
    for (indice = 0; indice < n; indice++) {
        v[indice] = readlineSync.questionFloat("Ingrese la nota: ")
        num = num + " " + v[indice];
    } console.log(num);
};

function cargarArregloEstudiante(v, n) {
    let indice;
    let nombre = " ";
    for (indice = 0; indice < n; indice++) {
        v[indice] = readlineSync.question("Ingrese el nombre del/la estudiante: ")
        nombre = nombre + " " + v[indice];
    } console.log(nombre);
};

function sacarPromedio() {
    let indice;
    let resultado = " ";
    
    for (indice = 0; indice < n; indice++) {

        vPromedioEscolar[indice] = (v1[indice] + v2[indice] + v3[indice])/3;
        
        resultado = resultado + " " + vPromedioEscolar[indice];
       
    } console.log(resultado);
    
};
