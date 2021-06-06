let readlineSync = require("readline-sync");
let num = readlineSync.questionInt("Ingrese un numero entero: ");

while(num==0){
    num = readlineSync.questionInt("Ingrese un numero entero: ");
    if(num != 0) {
        if((num%2) == 0){
            console.log ("el numero es par");
        }else{
            console.log ("el numero es impar!!");
        };
    };
};