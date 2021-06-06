let i;
for(i=1 ; i<=7 ; i++){
    console.log ("El area es: " , calcularAreaTriangulo (i , i*2))
}

function calcularAreaTriangulo(base , altura){
    return (base*altura)/2;
};