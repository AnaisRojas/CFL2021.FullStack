let n = 4;
let cantPersonas = new Array(n);

cargarArreglo(cantPersonas,n);
mostrarArreglo(cantPersonas,n);
console.log("La cantidad de personas menor que 21 años es: " ,mostrarMenorQue(cantPersonas,n));
console.log("La cantidad de personas de edad 21 o mayor son: ",mostrarMayorQue(cantPersonas,n));
console.log("La cantidad total de personas es: ",n);


//ESTO YA ESTA Y FUNCIONA
function Aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
 };

 function cargarArreglo(cantPersonas,n){
    let indice = 0;
    for (indice = 0; indice < n; indice++) {
        cantPersonas[indice] = Aleatorio(18,40);   //esta es una forma fija, seria: Math.floor(Math.random()*(N-M+1)+M) ; DONDE M ES MENOR QUE N, AMBOS VALORES SE VAN A INCLUIR
    }
};

function mostrarArreglo(cantPersonas,n){
    let indice=0;
    let mostrar=" ";
    for(indice=0; indice<n; indice++){ 
        mostrar=mostrar+" "+cantPersonas[indice];
        
    }console.log(mostrar);
};

function mostrarMenorQue(cantPersonas,n){
    let indice=0;
    let contador=0;
    for(indice=0; indice<n; indice++){
        if(cantPersonas[indice]<21){//para que esta condicion funcione y el contador incremente es importante ponerle [indice] al nombrar el array
        contador++;
        }
    }return contador
};
function mostrarMayorQue(cantPersonas,n){
    let indice=0;
    let mayores=0;
    for(indice=0; indice<n; indice++){
        if(cantPersonas[indice]>=21){
        mayores++;
        }
    }return mayores
};