//parametros y argumentos en funciones 

//cuando defenimos una funcio los valores que va recibir se conocen como parametros son una lista de valores pasados como parametros
//lista de variables asignada a una funcion
function parameter(a,b){}

//en cambio los argumentos son los valores que pasamos a nuestra funcion son los que se asignan a los parametros
//lista de valors asignados a los parametros
argumentos = parameter(5,5)

//-----------------------------------------------------------------



//otros temas respecto a los manejo de parametros y argumentos en js
let sumar = function(a,b){//si no se quiere asignar argumentos se le pueden asignar por default a los parametros .
    //imprimamos los valores de los parametros impresos o los argumentos
    //recordar que una funcion se puede definir como un obejto por lo tanto tiene propiedad hacemos uso de una llamada argument
    //esta propiedad es un arreglo por lo tanto permite acceder a los argumentos de esta forma como un arreglo usando su indice
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b
}

resultado= sumar(5,2)
console.log(resultado)
