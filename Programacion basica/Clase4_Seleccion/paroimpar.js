let readlineSync = require ("readline-sync");
let A = readlineSync.questionInt ("Ingrese un numero: ");
if(A != 0) {
    if((A%2) == 0){
        console.log ("el numero es par");
    }else{
        console.log ("el numero es impar!!");
    }
}else{
    console.log ("el numero ingresado es 0");
}