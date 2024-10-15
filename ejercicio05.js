function dosPalabras (primeraPalabra, segundaPalabra){
    if (primeraPalabra === segundaPalabra){
        return `La primera palabra ${primeraPalabra} y la segunda palabra ${segundaPalabra} son iguales`;
    }else if (primeraPalabra < segundaPalabra ){
        return `La primera palabra ${primeraPalabra} esta antes que ${segundaPalabra}`
    }else{
        return `La palabra ${primeraPalabra} viene despues que ${segundaPalabra} en el orden alfabetico`
    }
}

let palabras = dosPalabras("Sergio", "Antonio");
console.log(palabras);

let palabras2 = dosPalabras ("Acuña", "Insaurralde");
console.log(palabras2);

let palabrasIguales = dosPalabras ("Acuña", "Acuña");
console.log(palabrasIguales);