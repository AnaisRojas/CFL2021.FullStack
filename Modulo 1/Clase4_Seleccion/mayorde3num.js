let readlineSync = require ("readline-sync");
let A = readlineSync.questionInt ("ingrese primer numero: ");
let B = readlineSync.questionInt ("ingrese segundo numero: ");
let C = readlineSync.questionInt ("ingrese tercer numero: ");
let mayor = A;
if(B>mayor){
    mayor=B;
}else{
    if(C>mayor){
        mayor=C;
    }
} 
console.log ("mayor es: " ,mayor);



