//lo que hacen estas lineas de codigo es listar numeros random en un arreglo de dimension dada por el usuario, y luego contar las veces que aparece en el arreglo un numero que tambien es dado por el usuario. En cada linea detallé las modificaciones que hice.
let rl = require("readline-sync");
let elem, arr, nro, ocu;
elem = rl.questionInt("Ingrese tamaño: ");
arr = new Array(elem);
cargar(arr, elem);

nro = rl.questionInt("Ingrese numero: ");
mostrar(arr, elem);
ocu = contarOcurrencia(arr, elem, nro);//nombré a la funcion de manera tal que sea facil de saber que hace
//borré el console.log que estaba aca.


function cargar(v, l) {
    for (let i = 0; i < l; i++) {         //agrego llaves al for
        v[i] = Math.floor(Math.random() * 100);
    }
};

function mostrar(v, l) {
    let c = " ";
    for (let i = 0; i < l; i++) {//agrego llaves al for
        c += v[i] + " ";
    }
    console.log(c);
};

function contarOcurrencia(v, l, n) {
    let oc=0;//inicializo la variable oc en 0 asi es tratada como un numero
    for (let i = 0; i < l; i++) {//agrego llaves al for y al if
        if (v[i] == n) {
            oc++          
        }       
    }console.log("Aparece "+oc+" veces en la lista")//muestro por consola la cantidad de veces que se repite el numero ingresado por el usuario
};