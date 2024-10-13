//ejercicios de programacion js

//contador de palabras de javascript

/*Descripción: Escribe una función que cuente el número de palabras en una cadena de texto.
Ejemplo: contarPalabras('Hola mundo, ¿cómo estás?') debería devolver 5. */

const contadorPalabras = (texto) => {

    const palabras = texto.trim().split(/\s+/)
    
    let palabrasNoVacias = palabras.filter(palabras => palabras.length > 0);

    return palabrasNoVacias.length
}

console.log(contadorPalabras('Hola alex como estas '))

//DATOS NUEVOS  

//expresión regular para dividir:  Usa la expresión regular \s+ para dividir el texto en palabras

/*texto.trim(): Elimina los espacios en blanco al principio y al final de la cadena. Esto es útil 
para evitar contar espacios adicionales al inicio o al final como palabras. */

/*texto.split(/\s+/): Divide la cadena en un array de palabras usando una expresión regular. \s+ 
coincide con uno o más espacios en blanco, lo que significa que cualquier cantidad de espacios entre 
palabras se tratará como un único separador. */

/*palabras.filter(palabra => palabra.length > 0): Filtra el array para eliminar elementos vacíos que
 podrían resultar de múltiples espacios consecutivos. */

//------------------------------------------------------------------------------------------------

/*Calculadora Básica:

Descripción: Crea una función que tome dos números y una operación (suma, resta, multiplicación, división) y devuelva el resultado.
Ejemplo: calculadora(5, 3, 'suma') debería devolver 8. */


const calculadora = (n1,n2,op) => {
    switch(op){
        case 'suma':
            return n1 + n2
        case 'resta':
            return n1 - n2
        case 'multi':
            return n1 * n2
        case 'div':
            if(n2 !== 0){
                return n1 / n2
            }else{
                console.log('error al dividir por 0')
            }

            default:
                return 'no existe esa opcion'
    }
}

console.log(calculadora())

//--------------------------------------------------------------------------------------------

//sucesion de fibonacci

//formula de fibonacci: f(n) = f(n-1) + f(n-2)

/*Descripción: Escribe una función que genere los primeros n números de la sucesión de Fibonacci.*/

const fibonacci = (n) => {//n es el numero de elementos de la sucesion que va a generar

    let fib = [0,1];//inicializamos el array con los dos primeros elementos de la sucesion
    
    for(let i =2; i< n;i++){//iteramos desde el tercer elemento hasta el n
        fib[i] = fib[i-1] + fib[i-2];//calculamos el siguiente elemento de la sucesion
        //explicacion de la sintaxis: fib[i] es el elemento actual que estamos calculando
        //fib[i-1] es el elemento anterior
        //fib[i-2] es el elemento dos posiciones atras

        //como funciona cada iteracion
        //i = 2
        //fib[2] = fib[1] + fib[0] = 1 + 0 = 1
        //i = 3
        //fib[3] = fib[2] + fib[1] = 1 + 1 = 2
        //i = 4
        //fib[4] = fib[3] + fib[2] = 2 + 1 = 3
        //y asi sucesivamente
    }
    return fib
}

console.log(fibonacci(10))
//----------------------------------------------------------------

//algo de recursividad 
//recursividad: es una tecnica de programacion que consiste en una funcion se llame a si misma

//una funcion que se llama asi misma una y otra ves hasta q se cumpla
//una condicion de salida

// const contadorRegresivo = (n) => {

//     if(n < 0) return
//     console.log(n)
//     return contadorRegresivo(n-1)
// }

// contadorRegresivo(10)

//reintentar los llamados a una api hasta 5  veces 

const axios = require('axios')

const llamarApi = async (url , llamados = 0) => {
    try{
        const {data} = await fetch(url)
        console.log(data)
        return data
    }
    catch(err){
        if(llamados > 5){
            return

        }
        console.log(err)
        return llamarApi(url, llamados + 1)

    }
}

llamarApi('https://jsonplaceholder.typicode.com/users')