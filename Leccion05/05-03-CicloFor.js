for (
  //estructura del ciclo for consta de 3 zonas.
  let contador = 0; //parte donde se declaran las variable
  contador < 3; //condicion que queremos evaluar por cada iteracion
  contador++ //seccion donde se incremente o decrementa el contador
) {
  //esto es lo que se repite
  console.log(contador); //resultado de las iteraciones segun la condicion
}
console.log("fin del ciclo for");


//my practice ----------------------------------------------------------

for(let numeros = 0 ;numeros < 5;numeros++){
    console.log(numeros)
}
console.log('fin de este ciclo')
//-----------------------------------------------------------------------

//ciclo for infinito

for (let contador = 0; contador >= 0; contador++) {
  console.log(`Bucle infinito: ${contador}`);
}
