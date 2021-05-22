let readlinesync = require ("readline-sync");
let anio= readlinesync.questionInt("Digite el anio");
    

if (anio%4==0 || anio%400==0){
console.log("El anio ingresado es bisiesto") 
}else{
console.log("no es bisiesto");
};
