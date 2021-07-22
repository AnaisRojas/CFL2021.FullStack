let readlineSync = require("readline-sync"); //declaro el paquete que voy a usar//
let A = readlineSync.questionInt("Ingrese un numero entero: "); //declaro la variable A, que va a ser un numero que le pido al usuario//
let B = readlineSync.questionInt("Ingrese un numero entero: ");//declaro la variable B, que va a ser un numero que le pido al usuario//
let contador = A; //Indico que A va a ser el contador//

if (A > B) {   //Aca digo que la condicion para que se cumpla el for, va a ser que A sea mayor que B//
    contador = A;  //Contador, en este caso, va a ser A, ya que este va a ser el mayor numero de los dos//

    for (let inicio = A; inicio > B; inicio--) {   //Entonces, declaro variable inicio y digo que es igual a A, y mientras que este inicio sea mayor que B, se va a ir sumando 1//
        contador += (inicio - 1);   //Sumo contador a inicio menos 1, y asi se va a ir sumando 1 en 1 de mayor a menor//

        console.log(contador);  //muestro por consola el resultado de cada suma hasta llegar a la ultima segun el valor del menor numero, en este caso B//
    };

}else if( A<B){   //en este caso, la instruccion va a suceder siempre y cuando B sea mayor que A, va a suceder lo mismo que antes solo que tomando al mayor numero "B" como inicio//
    contador = B;

    for (let inicio = B; inicio > A; inicio--) {
        contador += (inicio - 1);

        console.log(contador);   //muestro por consola el resultado de cada suma hasta llegar a la ultima segun el valor del menor numero, en este caso A//
    }
} else if(A == B){    //si el usuario ingresa A y B como numeros iguales, entonces...//
    console.log("Son dos numeros iguales el resultado es ", A);   //Muestro por consola que son dos numeros iguales y no se suma nada//
};   
