let readlineSync = require("readline-sync");
let posicionDeLlegada = readlineSync.questionInt("Indique la posicion de llegada: ");
if(posicionDeLlegada==1){
    console.log ("Entregar medalla de Oro")
}else{
    if(posicionDeLlegada==2){
        console.log ("Entregar medalla de Plata")
    }else{
        if(posicionDeLlegada==3){
            console.log ("Entregar medalla de Bronce")
        }else{
            console.log ("Entregar certificado de participacion")
        }
    }
};
    
