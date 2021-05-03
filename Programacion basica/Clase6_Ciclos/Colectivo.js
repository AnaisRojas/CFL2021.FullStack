let readlineSync = require("readline-sync");
console.log ("Esperando Colectivo");
let llegadaColectivo = readlineSync.question ("Llego el colectivo? (Y/N): ");
while (llegadaColectivo == "N"){
    console.log ("Esperando colectivo")
    llegadaColectivo = readlineSync.question ("Llego el colectivo? (Y/N): ");
}
    console.log ("Llego el colectivo");

