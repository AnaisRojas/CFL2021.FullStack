let readlineSync = require("readline-sync");
let usuario = "Juan";
let contraseña = "claveJuan";
let ingreseUsuario = readlineSync.question("Ingrese su usuario: ");
let ingreseClave = readlineSync.question("Ingrese su contraseña: ");
if (usuario == ingreseUsuario && contraseña == ingreseClave) {
    console.log("Bienvenido/da")
} else {
    console.log("Lo sentimos, el usuario y/o contraseña ingresados son incorrecto.")
};