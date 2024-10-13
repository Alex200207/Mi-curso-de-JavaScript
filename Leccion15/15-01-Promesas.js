//Promesas en JavaScript

/*en una promesa se utilizan funciones de tipo callback , es codigo que tiene varios estados


Una promesa en JavaScript es como un acuerdo de que algo se hará en el futuro. Es una manera 
de manejar operaciones asíncronas, como cargar datos de un servidor, sin detener el resto del código.*/

/*tenemos dos caminos en las promesas:
 resolve(.then): el codigo esperado se ejecuto correctamente
 reject(.catch): el codigo tiene un error 
 
 mientras la promesa no haya ejecutado su codigo entra en el 
 estado de pendiente */

//ejem

//sintaxis basica

// Creación de una promesa:

let miPromesa = new Promise((resolve, reject) => { // Creamos una nueva promesa que acepta dos funciones: resolve y reject.
    let expression = false; // Definimos una expresión que determinamos si es verdadera o falsa.

    if(expression) { // Si la expresión es verdadera...
        resolve('resuelto'); // Llamamos a resolve, indicando que la promesa se ha cumplido correctamente.
    } else { // Si la expresión es falsa...
        reject('rechazado'); // Llamamos a reject, indicando que la promesa ha fallado.
    }
});

// Consumo de la promesa:

//miPromesa.then(//usando nombre de la promesa y el metodo then
    //valor => console.log(valor), // Si la promesa se resuelve correctamente (se llama a resolve), este código se ejecuta e imprime 'resuelto'.
    //error => console.log(error)  // Si la promesa es rechazada (se llama a reject), este código se ejecuta e imprime 'rechazado'.
//);//pasabamos el error como argumento

//otra forma exactamente lo mismo
miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error));//usamos catch en caso de la promesa falle ya no se llama el metodo
//resolve

//este es el principio de concepto de promesas en javascript
//A practicar!!!!!


//-------------------------------------------------------------------------------------------------------------------

//practice
/*Crea dos promesas que resuelvan después de diferentes tiempos. Usa Promise.all para esperar a que ambas promesas se resuelvan y luego imprime
 un mensaje cuando ambas hayan terminado. */


// Creación de la primera promesa
let promesa1 = new Promise((resolve, reject) => {
    // setTimeout simula una operación asincrónica que toma 2 segundos
    setTimeout(() => {
        // Cuando la operación se completa, llamamos a resolve
        resolve("Promesa 1 resuelta"); // Indica que la promesa se ha resuelto exitosamente
    }, 2000); // Tiempo en milisegundos
});

// Creación de la segunda promesa
let promesa2 = new Promise((resolve, reject) => {
    // setTimeout simula una operación asincrónica que toma 4 segundos
    setTimeout(() => {
        // Cuando la operación se completa, llamamos a resolve
        resolve("Promesa 2 resuelta"); // Indica que la promesa se ha resuelto exitosamente
    }, 4000); // Tiempo en milisegundos
});

// Promise.all recibe un array de promesas y espera a que todas se resuelvan
Promise.all([promesa1, promesa2])
    .then(resultados => {
        // Este código se ejecuta cuando todas las promesas se han resuelto
        console.log("Ambas promesas resueltas:", resultados); 
        // 'resultados' es un array que contiene los valores resueltos de ambas promesas
    })
    .catch(error => {
        // Si alguna de las promesas es rechazada, este código se ejecuta
        console.log(error); // Imprime el error
    });

// Resumen: El código simula dos operaciones asincrónicas que se resuelven en diferentes momentos.
// Utiliza Promise.all para esperar a que ambas se completen antes de proceder.


promesa3 = new Promise((resolve, reject)=> {
    let validacion = true;
    setTimeout(() => {
        if(validacion){
            resolve("promesa 3 resuelta")
        }
        else{
            reject("promesa 3 rechazada")
        }
    }, 5000)
})
promesa3
.then(resultado => console.log(resultado))
.catch(error => console.log(error))