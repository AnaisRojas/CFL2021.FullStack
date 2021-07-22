let readlineSync = require ('readline-sync');
let alturaPermitida = 1.60;
let alturaPersona = readlineSync.questionFloat ("¿Cual es su altura?");
if(alturaPersona<= alturaPermitida){ 
    console.log ("No puede pasar")
}else{
    console.log ("Adelante, que se divierta!");
};


