let rl = require ("readline-sync");
let elem, arr, nro, ocu;
elem= rl.questionInt("Ingrese tamaño: ");
arr = new Array(elem);
cargar(arr, elem);
nro = rl.questionInt("Ingrese numero: ");
ocu = metodo(arr, elem, nro);
console.log("El numero "+num+" ... "+ocu);
mostrar(arr,elem);

function cargar(v, l){
    for(let i=0; i<l; i++)          //agrego llaves al for
    v[i]=Math.floor(Math.random()*100);
}

function mostrar(v,l){
    let c=" ";
    for(let i=0; i<l; i++)      //agrego llaves al for
    c+=v[i]+" ";
    console.log(c);
};

function metodo(v, l, n){
    let oc;
    for(let i=0; i<l; i++)      //agrego llaves al for
    if(v[i]==n)
    oc++
    
};







