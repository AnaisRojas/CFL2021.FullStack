let readlinesync = require("readline-sync");
let anio = readlinesync.questionInt("Digite el anio");
verificarTipoDeAnio(anio);
let mes = readlinesync.questionInt("Digite el mes");
let dia = readlinesync.questionInt("Digite el dia");











function verificarTipoDeAnio(){
    intento=0;
    let bisiesto=0;
    let  noBisiesto=0;
    while ((anio != 0)&&(intento<1)) {
        if (anio % 4 == 0 || anio % 400 == 0) {
            bisiesto++;
            intento++;
            console.log("El anio ingresado es bisiesto")
        } else {
            noBisiesto++;
            intento++;
            console.log("no es bisiesto");
        }
    }
    
};

function fantanTantosDias(){
    let enero = 31;
    let febrero = 28;
    let marzo = 31;
    let abril = 30;
    let mayo = 31;
    let junio = 30;
    let julio = 31;
    let agosto = 31;
    let septiembre = 30;
    let octubre = 31;
    let noviembre = 30;
    let diciembre = 31;
    
   


}
 

