let readlineSync=require("readline-sync");
let n=readlineSync.questionInt("Ingrese cuantos numeros quiere multiplicar: ");
let v1=new Array(n);
let v2=new Array(n);
let v3=new Array(n);
let v4=new Array(n);
let vResultado=new Array(n);
cargarArreglo(v1,n);
cargarArreglo(v2,n);
cargarArreglo(v3,n);
cargarArreglo(v4,n);
multiplicarArreglo(v1,v2,v3,v4,vResultado,n);


//FUNCIONES
function cargarArreglo(v,n ){
    let indice;
    let num=" ";
    for(indice=0; indice<n; indice++){
        v[indice]=readlineSync.questionInt("Ingrese el numero: ")
        num=num+" "+v[indice];
    }console.log(num);
};
function multiplicarArreglo( ){
    let indice;
    let resultado=" ";
    for(indice=0; indice<n; indice++){
        vResultado=v1[indice]*v2[indice]*v3[indice]*v4[indice];
        resultado=resultado+" "+vResultado;
    }console.log(resultado);
};