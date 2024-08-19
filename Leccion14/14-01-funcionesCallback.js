//Funciones callback en JavaScript

/*Una funcion de tipo callback es aquella que se pasa como parametro a otra funcion
y dentro de una funcion vamos a poder llamar a otra funcion */

/*procesos sincronos se ejecutan una linea a la ves 
procesos asincronos se ejecutan varios procesos por separado*/

//las funciones en javascript se ejecutan de manera secuencial
/*esto quiere decir que si creamos una llamada a la  funcion1 y una a la funcion2 esto
se va ejecutar de manera secuencial es decir primero la funcion1 y luego la dos */

/*las funciones de tipo callback: su objetivo es que puedan ser utilizadas de manera asingcrona
*/

//funciones de tipo callback
//creamos una funcion que inprime un mensaje
let imp = function imprir(mensaje){
    console.log(mensaje)
}


//declar otra funcion que va utilizar la funcion anterior
function sumar (op1,op2, funcionCallback){//pasamos la funcion con los otros parametros al ser parametro tendra cualquier nombre
    let res = op1 + op2;//craemos una variable res que tendra el resultado de la suma
    funcionCallback(`Resultado: ${res}`)//uso de template strings mandamos a llamar la funcion y pasamos la respuesta de la suma

}

sumar(5,3,imp);//pasamos la referencia de la funcion de imprir con la funcion de sumar
//repasar el paso por referencia
//las funciones son objetos

/*se aplicado el concepto de callback */

//------------------my practice

let imp2 = (mensaje) =>{
    console.log(mensaje)
}

const sumar2 = (n1,n2,callback) =>{
    let respuesta = n1 + n2;
    callback(`Resultado: ${respuesta}`)
    
}

sumar2(5,2,imp2)


const messageFunction = (message) => console.log(message);

const div = (N1, N2, show) => {
    let response = N1 / N2;
    show(`Tu resultado es ${response}`)
}

setTimeout(() => div(5, 6, messageFunction), 5000);


//------------------------------------------------------
//ejemplo mio 
const imprimir = (mensaje) => console.log(mensaje)

const x = (num,callback) => {
    if(num  % 2 == 0){
        return callback(`numero par ${num}`)
    }else{
        console.log('numero no par')
    }
}

setTimeout(() => x(5,imprimir),5000)

//---------------------------------------------------
