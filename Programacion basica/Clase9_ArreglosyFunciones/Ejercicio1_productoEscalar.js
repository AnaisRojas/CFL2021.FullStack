let readlineSync = require ("readline-sync");
let n = readlineSync.questionInt ("¿Cuantos numeros quiere ingresar?: ");
let v1 = new Array(n);
let v2 = new Array(n);
let vSuma= new Array(n);
let productoEscalar = new Array(n);
let i =0;

for(i=0 ; i<n ; i++){
    v1[i]=readlineSync.questionInt ("Ingrese un numero para v1: ", i );
    
    
}

for(i=0 ; i<n ; i++){
    v2[i]=readlineSync.questionInt ("Ingrese un numero para v2: " , i );
 
} 
for(i=0; i<n; i++){
    productoEscalar[i] = v1[i] * v2[i]
}

for(i=0; i<n; i++){
    vSuma[i] = productoEscalar[i] 
    console.log ("El producto escalar es: " , vSuma)
}
