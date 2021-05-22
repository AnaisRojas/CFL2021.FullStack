//ESTO ES UNA PLANTILLA
let readlineSync = require('readline-sync');

let cantidad = readlineSync.questionInt("Ingrese la cantidad de números:"); //variable cantidad para que el usuario indique la longitud del arreglo
let v = new Array(cantidad);    //variable V de vector, para nombrar el arreglo sobre el cual se va a trabajar
let i;     //variable indice para el for

for (i = 0;  i < cantidad ; i++) {		//para cargar numeros, el inicio es el indice 0 y el final es cantidad - 1 por ser el array de base 0.
	v[i] = readlineSync.questionInt("Ingrese v[", i, "]");		//pedimos al usuario los numeros
}

for (i = cantidad - 1; i >= 0; i-- ) { 		//mostramos por consola los numeros cargados invertidos, arrancamos en la ultima posicion que seria cantidad -1, y luego vamos haciendo i -- para bajar de indice, hasta llegar al 0
	console.log(v[i], " ");
};

