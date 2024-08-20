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

  //recordar que solo se puede invocar await dentro de una funcion declarada con async

//ejercicio de practica-----------------------------------------------------------------------------------------------


// Ejercicio 1: Modificar la función para que espere 5 segundos en lugar de 3 segundos antes de resolver la promesa.

async function ejercicio1(){
    let miPromesa = new Promise((resolve) =>{
        setTimeout(() => resolve('promesa cumplida despues de 5 segundos'),5000)
    })
    console.log(await miPromesa)
}

ejercicio1();

// Ejercicio 2: Crear una nueva función asincrónica llamada 'functionConPromesaAwait' que no utilice setTimeout.
// En su lugar, crea una promesa que se resuelva después de 2 segundos y devuelve el mensaje "promesa con await".

async function functionConPromesaAwait(){
    let miPromesa = new Promise((resolve) => {
        resolve('promesa con await')
    },2000)
    console.log(await miPromesa)
}
functionConPromesaAwait();


// Ejercicio 3: Llamar a la función 'functionConPromesaAwait' y mostrar el resultado utilizando console.log.

// Ejercicio 4: Crear una función asincrónica llamada 'functionConPromesaAwaitAll' que utiliza Promise.all para esperar
// la resolución de múltiples promesas. Crea dos promesas, una que se resuelva después de 1 segundo con el mensaje "promesa 1"
// y otra que se resuelva después de 3 segundos con el mensaje "promesa 2". Utiliza Promise.all para esperar a que ambas promesas se resuelvan
// y muestra los resultados utilizando console.log.

// Ejercicio 5: Llamar a la función 'functionConPromesaAwaitAll' y mostrar los resultados utilizando console.log.