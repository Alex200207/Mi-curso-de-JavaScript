//imprimir numero pares de 0 a 10
//esta es una etiqueta o label
inicio: for (let contador = 0; contador <= 10; contador++) {
  if (contador % 2 == 0) {
    // si queremos numeros impares usar (!= "distindo de")
    //modulo o resto de 2 es igual a 0 esto es para identifcar numero pares
    console.log(contador);
    continue inicio; //va a la siguiente iteracion o donde especifiquemos con la etiqueta
    //break; //rompera el ciclo en la primera iteracion podemos hacer uso de la etiqueta para romper el ciclo y no ejecutar el bloque si no la ultima
    //linea
  }
}
console.log("fin del ciclo for");
//la tipo de programacion go-to no es recomendad para realizar los algoritmos de nuestros porgramas
