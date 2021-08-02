//capturo el elemento boton
let boton=document.getElementById("boton");
//le doy al elemento la funcion cargarArreglo al hacer el evento click
boton.addEventListener("click",listarNumeros);
//capturo el elemento div donde mostrare los numeros obtenidos de la function
let lista = document.getElementById("lista");
//declaro una constante para un valor max hasta el cual llegara el loop
const max = 100;
//declaro resultado con valor vacio donde se iran guardando los numeros 
let resultado = " ";



//armo la funcion para listar numeros
function listarNumeros() {
    for(let i=1; i<=max; i++){
        resultado = resultado+" "+i;
        //cargo en el html con los numeros obtenidos de la function
        lista.innerHTML= resultado
    }             
};   