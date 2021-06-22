//capturo primer elemento input
let ingresoUno= document.getElementById("ingresoUno");
//capturo segundo elemento input
let ingresoDos= document.getElementById("ingresoDos");
//capturo elemento button
let boton = document.getElementById("boton");
//le doy al elemento button que al clickearlo haga la funcion
//contador
boton.addEventListener("click" , contador);

function contador(){
    //tomo el valor numerico con .value en ambos elementos
    //guardando lo ingresado en dos contadores distintos
    let contador1 = ingresoUno.value;
    let contador2 = ingresoDos.value;
    //condicion en base a los contadores
    if((contador1>0 && contador2>0)||(contador1<0&&contador2>0)||(contador1>0&&contador2<0)){
        alert("Ingresaste al menos 1 numero positivo.");
    }
};

//|| (contador2>0 || contador1<0)