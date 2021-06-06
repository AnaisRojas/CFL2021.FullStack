let readlineSync = require("readline-sync");  //Declaro paquete
//Declaro promedio sin inicializar
let valor = readlineSync.questionFloat("Ingrese un numero distinto de 0: ");  //Pido al usuario que ingrese un valor, puede o no ser entero
let maxima = valor;     //Declaro variable maxima inicializando en el primer valor ingresado por usuario
let minima = valor;     //Declaro variable minima inicializada en 0
let contador = 0;       //Declaro contador, que es el que va a sumar todos los numeros
let promedio;      //Declaro variable total inicializada en 0
let suma = 0;

while (valor != 0) {                  //Mientras que valor ingresado sea desigual a 0
    if (valor > maxima) {               //Si valor es mayor que maxima entonces maxima ahora toma el valor de "valor"
        maxima = valor;
       
    } else if (valor < minima) {
        minima = valor;

    }
    contador++;         //Para que la suma se realice bien tengo que respetar es orden de linea de codigo
    suma += valor;
    valor = readlineSync.questionFloat("Ingrese un numero distinto de 0: ");
   
};

console.log("La minima es: ", minima, "La maxima es: ", maxima, "El promedio es: ", (promedio = suma/contador));