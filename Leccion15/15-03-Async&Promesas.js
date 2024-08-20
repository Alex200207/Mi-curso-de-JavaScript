//palabras Async con promesas de JavaScript

/*Async: permite facilitar el uso de promesas y al poner Async antes de la definicion de un metodo
quiere decir que el metodo esta obligado a regresar una promesa*/


//Async indica que una funcion regresa una promesa
//
async function miFunction() {//no estamos obligados a recibir un parametro nomas es una funcion normal
    return 'saludo desde la promesa y async'//esta funcion es como si regresara un resolve solamente hacemos return
}

miFunction().then(valor => console.log(valor))// se consume igual sin embargo se le pasan los () a la funcion
//esta fue una manera mas simplificadas es un a funcion  normal nomas que usamos async antes 
//y esto lo que regresa es el valor de resolver

/*entonces podemos convertir una funcion a promesa y lo que retorne lo podemos consumir
con la funcion .then()*/


 //----------------------------------------------------------practice

 async function nueva() {
    return 'esta es otra prueba de async en funciones'
 }

 nueva().then((valor) => console.log(valor))

 async function nueva2(){
    return 'esta es otra prueba de async en funciones'
 }
 nueva().then((valor) => console.log(valor))