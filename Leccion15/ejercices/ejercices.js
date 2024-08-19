//ejercicios de promesas 

// Creación de una nueva promesa
let promise = new Promise((resolve, reject) => {
    // setTimeout simula una operación que toma 6 segundos
    setTimeout(() => {
        let validacion = false; // Cambia este valor a true para probar la resolución de la promesa
        if (validacion) {
            // Si la validación es verdadera, resolvemos la promesa
            resolve('se ha ejecutado la validacion'); // Mensaje de éxito
        } else {
            // Si la validación es falsa, rechazamos la promesa
            reject('ha fallado la validacion'); // Mensaje de error
        }
    }, 6000); // Tiempo en milisegundos
});

// Manejo de la promesa
promise
    .then((resuelto) => console.log(resuelto)) // Si la promesa se resuelve, imprime el mensaje de éxito
    .catch((error) => console.log(error)); // Si la promesa es rechazada, imprime el mensaje de error
