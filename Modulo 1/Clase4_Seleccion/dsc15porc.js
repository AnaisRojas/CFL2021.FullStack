let readlineSync=require ("readline-sync");
let item = readlineSync.questionInt ("Ingrese precio del producto: ");
let cantidad = readlineSync.questionInt ("Ingrese cantidad: ");
let Mes = readlineSync.question("ingrese mes: ");
if(Mes == "octubre"){
    valorCompra = item * cantidad;
    console.log(valorCompra - ((15 * valorCompra) /100));
}else{
    console.log ( item * cantidad);
}