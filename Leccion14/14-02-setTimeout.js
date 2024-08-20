//funciones setTimeout en Javascript

/*setTimeout en JavaScript es una función que se usa para 
ejecutar un pedazo de código o una función después de un cierto periodo de tiempo,
 medido en milisegundos. Básicamente, le dices a JavaScript: "Espera un tiempo específico y luego haz esto */


let imp = function imprir(mensaje){
    console.log(mensaje)
}

function sumar (op1,op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`)
}

sumar(5,3,imp);

//llamadas asincronas con uso de setTimeout : permite iniciar una nueva tarea

function myFuncionCallback(){
    console.log('funcion asincrona despues de 3 segundos')
}

setTimeout(myFuncionCallback,3000)//resive como parametro una funcion de tipo callback
/*se pas el mensaje despues de 3 segundos */

/*llamadas asincronas podemos ejecutar varios procesos en paralelo en este caso estamos usando la funcion setTomeout
para que se ejecute  otro proceso una ves que pasen 3 segundos. esto quiere decir que 
despues de 3 segundos  se manda llamar la funcion y se manda a consola el mensaje ... */

//setTimeot tambien puede resivir como parametro directamente la funcion 

setTimeout(function(){console.log('saludo asincrono 2')},4000);


//funciones flechas es mas resumido
setTimeout(() => console.log('saludo asincrono 3'),5000);

setTimeout( () => console.log('saludo asincrono 4 '),6000);


