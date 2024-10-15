function calcularArea(base, altura, tipoDeFigura){
   let area;
   if (tipoDeFigura === "triangulo"){
    area = (base * altura) / 2;
   }else if (tipoDeFigura === "cuadrado"){
    area = base * base;
   }else{
    return "tipo de figura no valida"
   }
   return area;
   }

   let area = calcularArea (15, 25, "cuadrado");
   console.log(area);

   let area2 = calcularArea (15, 25, "triangulo");
   console.log(area2);