//declaro var aumentar para capturar elemento boton +
let aumentar = document.getElementById("button+");
//addEventListener le da al elemento capturamos y le da la funcionalidad
//de la funcion al hacer el evento que ponemos en comillas.
aumentar.addEventListener("click", contarClickMas);

let decrementar = document.getElementById("button-");
decrementar.addEventListener("click", contarClickMenos);

let cantidad = document.getElementById("total");

let cantidadTotal = document.getElementById("sumaCant");
cantidadTotal.addEventListener("click", sumarCantidadTotal);

let contador=0;

function contarClickMas( ){ 
    contador++;
    console.log(contador);
   
    cantidad.innerHTML = "Cantidad en el carrito: " + contador;
};  

function contarClickMenos(){
    contador--;
    console.log(contador);
    
    cantidad.innerHTML = "Cantidad en el carrito: " + contador;

};

function sumarCantidadTotal(){
    contador += +document.getElementById("ingresar").value;

    cantidad.innerHTML = "Cantidad en el carrito: " + contador;
}
    
