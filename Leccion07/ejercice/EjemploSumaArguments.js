//Ejemplo sumar todos los argumentos

//suma de cada uno de los elementos
let resultado = sumarTodo( 5, 4, 13, 10, 9); //arreglo de argumentos

console.log(sumarTodo(arguments.length))//cantidad de argumentos
console.log(resultado)//imprmimos el valor de la variable de resultado 

function sumarTodo(){//crear una funcion
    let suma = 0;//crear variable suma incialmente en 0
    for(let i = 0; i < arguments.length;i++)//crear ciclo para iterar todos los valores del arreglo de argumentos
    //la condicion es iterar desde la variable i hasta argument.length es decir recorrer todos los elementos que tiene nuestro arreglo de argumentos
    {
        suma += arguments[i];//suma = suma + arguments
        console.log(arguments[i])//viendo los argumentos
    }
    return suma//retornamos el valor de la variable suma 
}

/*Primera iteración (i = 0):

arguments[0] es 5.
suma = 0 + 5 = 5.
Imprime 5.
Segunda iteración (i = 1):

arguments[1] es 4.
suma = 5 + 4 = 9.
Imprime 4.
Tercera iteración (i = 2):

arguments[2] es 13.
suma = 9 + 13 = 22.
Imprime 13.
Cuarta iteración (i = 3):

arguments[3] es 10.
suma = 22 + 10 = 32.
Imprime 10.
Quinta iteración (i = 4):

arguments[4] es 9.
suma = 32 + 9 = 41.
Imprime 9.
Finalmente, el ciclo termina y la función retorna suma, que es 41.*/




//my practice ----------------------------------------------------------------------------
//una mutiltiplicacion de argumentos

let resultado1 = multiTodo( 5, 5, 2, 6, 9 ,4)
console.log(resultado1)
function multiTodo(){
    let multi = 1;
    for(let i = 0; i < arguments.length;i++)
    {
        multi *= arguments[i]
    }
    return multi;
}

//una divicion

let resultado2 = divTodo(5,6,98,15)
console.log(resultado2)
function divTodo(){
    let div = 1
    for(let i = 0; i < arguments.length;i++)
    {
        div /= arguments[i]
    }
    return div;
}

let resultado3 = sumarAll(5,2,8,5,8,8)
console.log(resultado)

function sumarAll(){
    let sumar = 0
    for(let i = 0; i < arguments.length;i++)
    {
        sumar+= arguments[i]
    }
    return sumar
}