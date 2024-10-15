function cualEsMayor (nro1, nro2){
    if (nro1 > nro2){
        return "El primer nro es mayor: " + nro1;
    } else if (nro2 > nro1){
        return "El segundo nro es mayor: " + nro2;
    }else{
        return "Ambos valores son igules";
    }
}
let resultado = cualEsMayor(10, 25);
console.log(resultado);