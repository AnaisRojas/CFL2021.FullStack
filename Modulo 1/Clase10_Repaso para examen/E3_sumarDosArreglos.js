let readlineSync = require ("readline-sync");
let n = readlineSync.questionInt("Ingrese la cantidad de elementos que desea sumar: "); //pido dimension de arreglo al usuario
let v1 = new Array(n);  //declaro arreglo 1
let v2 = new Array(n);  //declaro arreglo 2
let suma = new Array(n);    //declaro arreglo suma
cargarArreglo(v1,n);        //cargo arreglo 1
cargarArreglo(v2,n);    //cargo arreglo 2
mostrarArreglo(v1,n);   //muestro arreglo 1
mostrarArreglo(v2,n);   //muestro arreglo 2
sumarArreglos(v1,v2,suma,n);    //sumo ambos arreglos guardando el resultado en un tercer arreglo
mostrarArreglo(suma,n)  //muestro la suma de cada indice de ambos arreglos

function cargarArreglo(v,n){        //parametros arreglo y dimension
    let indice;                     //variable indice para recorrer el arreglo
    for(indice=0; indice<n; indice++){  
        v[indice]=Math.floor(Math.random()*(100+1));    //cargo con numeros aleatorios, con esta funcion lo hago hasta el 100 inclusive
    }return v[indice];                  //retorno los numeros
};

function sumarArreglos(v1,v2,suma,n){   //parametros
    let indice;             //variable indice para recorrer el arreglo
    for(indice=0; indice<n;indice++){   
        suma[indice]=v1[indice]+v2[indice]; //guardo la suma del contenido de cada subindice en un tercer arreglo
    }return suma[indice]        //retorno los resultados
};

function mostrarArreglo(v,n){   //parametros
    let indice;     //variable indice para recorrer arreglo
    let numero;     //variable numero para ir mostrando lo que se cargó
    for(indice=0; indice<n; indice++){
        numero=numero+" "+v[indice];  //muestro el numero de cada subindice
        
    }console.log( numero);    //muestro por consola
};

//PORQUE ME QUEDA UNDEFINED PERO ME LOS MUESTRA IGUAL??




