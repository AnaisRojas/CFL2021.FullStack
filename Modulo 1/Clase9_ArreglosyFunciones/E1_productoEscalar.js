let readlineSync = require ("readline-sync");
let n = readlineSync.questionInt ("¿Cuantos numeros quiere ingresar?: ");
let v1 = new Array(n);
let v2 = new Array(n);
let vMult= new Array(n);
let suma;
cargarArreglo(v1,n);
cargarArreglo(v2,n);
multiplicarArreglos(v1,v2,vMult,n);
console.log("Resultado: "+vMult)
productoEscalar(vMult,n );


//FUNCIONES
function cargarArreglo(v,n){
    let indice;
    let num=" ";
    for(indice=0; indice<n; indice++){
        v[indice]=readlineSync.questionInt("Ingrese el numero: ")
        num=num+" "+v[indice];
    }console.log(num);
};

function multiplicarArreglos( ){
    let indice;
    let resultado=" ";
    for(indice=0; indice<n; indice++){
        vMult[indice]=v1[indice]*v2[indice];
        resultado=resultado+" "+vMult[indice];
    }console.log(resultado);
};

function productoEscalar( ){
    let indice;
    let suma=0;
    for(indice=0; indice<n; indice++){
        suma+=vMult[indice];
    }console.log("El producto escalar es: "+suma)
};