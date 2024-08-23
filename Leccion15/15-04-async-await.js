//Palabras await y async con promesas en JavaScript

/* await es una palabra clave que se utiliza junto con async para trabajar con funciones asíncronas.

Cuando se coloca await antes de una expresión que devuelve una promesa, la función que contiene ese await se pausa hasta que 
la promesa se resuelva o se rechace.Esto permite que el código asíncrono se ejecute de manera sincrónica, lo que facilita la 
escritura y comprensión del código. */

//ejemplo

//async/await

async function funcionConPromesa() {//funcion debe regresar una promesa
  //funcion asincrona
  let miPromesa = new Promise((resolve) => {//procesamos la promesa dentro del funcion
    resolve("Promesa con await");
  });

  console.log(await miPromesa); //espera a que se resuelva la promesa ,consumir la respuesta de la promesa
  //no es necesario pasarle el .then() ya que con await se espera a que se resuelva la promesa]
}
//await debe procesar una promesa
//con await se recive el valor que antes se resivia con el .then().
/*await solo se puede usar dentro de una funcion declarada con async */



async function funcionConPromesa2(){
    let miPromesa2 = new Promise((resolve) => {
        resolve('promesa cumplida con await')
    })
    console.log(await miPromesa2)
}

//ejercicos de practica-----------------------------------------------------------------------------------------------
// Ejercicio 1: Crea una función asincrónica llamada "obtenerDatos" que reciba un parámetro llamado "url".
 // Dentro de la función, utiliza la función fetch() para hacer una solicitud GET a la URL proporcionada. 
 // Utiliza await para esperar la respuesta de la solicitud y luego convierte la respuesta a formato JSON. 
 // Finalmente, devuelve los datos obtenidos en formato JSON. // Ejemplo: 
 /* async function obtenerDatos(url) { const response = await fetch(url); const data = await response.json(); return data; } */

const url = 'https://jsonplaceholder.typicode.com/posts';

async function obtenerDatos(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}




// Ejercicio 2: Crea una función asincrónica llamada "obtenerUsuarios" que utilice la función "obtenerDatos" creada en el ejercicio anterior.
// La función "obtenerUsuarios" debe llamar a "obtenerDatos" con la URL de una API que devuelve una lista de usuarios. 
// Luego, muestra en la consola el nombre de cada usuario obtenido. // Ejemplo: 
/* async function obtenerUsuarios() { const url = 'https://api.example.com/users';
const data = await obtenerDatos(url); data.forEach(user => { console.log(user.name); }); } */

async function obtenerUsuarios() {
    const data = await obtenerDatos(url);
    data.forEach(user => {
        console.log(user.name);
    });
}