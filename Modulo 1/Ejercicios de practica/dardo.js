let readlineSync = require("readline-sync");
let helado = 1.90;
let topin = readlineSync.question("ingrese topin: ");
if (topin == "oreo") {
    console.log(helado + 1);
} else {
    if (topin == "kitkat") {
        console.log(helado + 1.50);
    } else {
        if (topin == "brownie") {
            console.log(helado + 0.75);
        } else {
            if (topin == "lacasitos") {
                console.log(helado + 0.95);
            } else {
                console.log("no tenemos ese topin, su compra es de: " + helado)
            }
        }
    }
}
