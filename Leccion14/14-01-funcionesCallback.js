//Funciones callback en JavaScript

/*Una funcion de tipo callback es aquella que se pasa como parametro a otra funcion
y dentro de una funcion vamos a poder llamar a otra funcion */

//las funciones en javascript se ejecutan de manera secuencial
/*esto quiere decir que si creamos una llamada a la  funcion1 y una a la funcion2 esto
se va ejecutar de manera secuencial es decir primero la funcion1 y luego la dos */


//funciones de tipo callback

let imp = function imprir(mensaje){
    console.log(mensaje)
}


//declar otra funcion que va utilizar la funcion anterior
function sumar (op1,op2, funcionCallback){//pasamos la funcion con los otros parametros al ser parametro tendra cualquier nombre
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`)//uso de template strings mandamos a llamar la funcion y pasamos la respuesta de la suma

}

sumar(5,3,imp);//pasamos la referencia de la funcion de imprir con la funcion de sumar
//repasar el paso por referencia
//las funciones son objetos

/*se aplicado el concepto de callback */