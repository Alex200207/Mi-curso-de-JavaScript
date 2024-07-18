//Ciclo do while

let contador = 0;

do {
  console.log(contador);//primero se imprime el contador si evaluar la condicion ya que en do while se ejecuta el codigo almenos una ves
  //while evalua la condicion despues del bloque de codigo eso hace que almenos una ves se ejecute
  contador++;//post-incremento
} while (contador < 3);//condicion
console.log("fin del ciclo")
//mayor diferencia es que aun que la condicion no sea verdadera siempre ejecuta el codigo almenos una ves por primero en do se hace uso de su 
//codigo luego se evalua y se usa la condicion