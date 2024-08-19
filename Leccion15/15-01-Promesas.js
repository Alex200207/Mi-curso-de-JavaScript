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