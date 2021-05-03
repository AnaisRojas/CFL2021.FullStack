let readlineSync = require("readline-sync");  //paquete que voy a usar para pedir datos al usuario//
let clave = "eureka";  //declaro variable clave//
let intento = 1;   //declaro variable intento e inicializo en 1//
let ingreseClave = readlineSync.question("Ingrese su clave: ");  //pido al usuario que ingrese la clave, solo pongo question porq voy a pedir clave alfabetica//

while ((ingreseClave != clave) && (intento < 3)){  //Mientras, el usuario ingrese una clave invalida, y el intento sea menor a 3, debe ingresar una clave nuevamente//
    ingreseClave = readlineSync.question("Ingrese su clave: ");  //el usuario la ingresará//
    intento ++; //Cada vez que se ingrese una mal, osea que no la condicion declarada sea verdadera,  se sumara un intento//
};
    if ((ingreseClave == clave) && (intento <= 3)) {   //Si la clave es correcta y el intento no supero los 3, por consola se mostrara un mensaje de bienvenida//
        console.log("Bienvenido Einstein!!")
};
