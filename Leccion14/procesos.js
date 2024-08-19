/*conceptos de procesos asincronos y sincronos */

/*sincronos: Los procesos síncronos en JavaScript son aquellos que se 
ejecutan de manera secuencial, es decir, una tarea se completa antes de
 que la siguiente comience. Cuando el código se ejecuta de forma síncrona,
  el programa sigue un flujo de arriba hacia abajo,
esperando que cada línea se complete antes de pasar a la siguiente. */

/*asincronos: Los procesos asíncronos en JavaScript permiten que ciertas
 operaciones se ejecuten en paralelo o en el futuro, sin bloquear la ejecución
  del resto del código. Esto significa que el programa puede continuar ejecutándose mientras una tarea asíncrona 
(como una llamada a una API, una lectura de archivo, o un temporizador) se resuelve en segundo plano. */

/*Ejemplos utilizando la funcion setInterval en javaScript */

//setInterval es similar a la funcio  setTimeot va resivir un parametro tipo callback
//manda a llamar a la funcion de tipo callback cada cierto segundo varias veces 

let reloj = () => {
    let fecha = new Date();//crear un objeto de tipo fecha esto trae la fecha actual
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)//codigo para imprimir hora,minutos,segundos
}

//usar funcion setInterval
setInterval(reloj,1000)//se manda a llamar cada segundo
