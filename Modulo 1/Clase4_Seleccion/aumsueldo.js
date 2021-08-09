let readlineSync = require("readline-sync");
let sueldo1 = readlineSync.questionInt("Ingrese sueldo: ");
if ((0 < sueldo1)&&( sueldo1 <= 15000)) {
    console.log(sueldo1 + ((20 * sueldo1) / 100));
} else {
    if ((15001 <= sueldo1)&&(sueldo1 <= 20000)) {
        console.log(sueldo1 + ((10 * sueldo1) / 100));
    } else {
        if ((20001 <= sueldo1)&&(sueldo1 < 25000)) {
            console.log(sueldo1 + ((5 * sueldo1) / 100));
        }
    }
    if (sueldo1 >= 25000) {
        console.log("No hay aumento para usted :(");
    }};