let readlineSync = require("readline-sync");
let persona = readlineSync.questionFloat("Altura de la persona: ");
if (persona >= 1.60) {
    console.log("Pase")
}else {
    console.log("Lo siento, no puede pasar");
};
