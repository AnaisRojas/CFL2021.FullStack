let rl = require("readline-sync");
let elem, arr, nro, ocu;
elem = rl.questionInt("Ingrese tamaño: ");
arr = new Array(elem);
cargar(arr, elem);

nro = rl.questionInt("Ingrese numero: ");
mostrar(arr, elem);
ocu = contarOcurrencia(arr, elem, nro);//nombre a la funcion de manera tal que sea facil de saber que hace
//borre el console.log que estaba aca y lo puse modificado en la funcion "contarOcurrencia"


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
    let oc=" ";//agrego comillas para que me muestre esta variable como texto
    for (let i = 0; i < l; i++) {//agrego llaves al for y al if
        if (v[i] == n) {
            oc++    
            console.log("Aparece "+oc+" veces en la lista")//muestro por consola la cantidad de veces que se repite el numero ingresado por el usuario      
        }    
    } 
};