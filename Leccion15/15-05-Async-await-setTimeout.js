/*Async/await con setTimeout*/
//funciones asiyncronas con await y setTimeout

async function functionConPromesaAwaitTimeoyt() {//creando funcion asincrona
    console.log("Inicio de la función");
    // Creamos una nueva promesa utilizando la clase Promise.
    // La promesa se resuelve después de 3000 milisegundos (3 segundos) utilizando setTimeout.
    let miPromesa = new Promise((resolve) => {
      setTimeout(() => resolve("promesa con await y timeout"), 3000);
    });
  
    // Utilizamos la palabra clave 'await' para esperar a que la promesa se resuelva.
    // Esto significa que la ejecución de la función se pausará hasta que la promesa se resuelva.
    // Una vez que la promesa se resuelve, el valor resuelto se asigna a la variable 'miPromesa'.
    console.log(await miPromesa)
  }
  
  // Llamamos a la función 'functionConPromesaAwaitTimeoyt' para ejecutarla.
  functionConPromesaAwaitTimeoyt();
  console.log("Fin de la función");