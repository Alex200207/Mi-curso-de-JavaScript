//Funciones de tipo exprecion
//se asignan a una variable para evitar poner un nombre a una funcion
//se llaman funciones de tipo exprecion o anonimas


//Declaracion de una funcion de tipo exprecion
let x = function(a,b){return a + b};//como es una exprecion termina con punto y coma
//la declaracion de la funcion se asigna a la variable x 


resultado = x(5,5);//pasamos los argumentos de la funcion en la variable la cual tiene la referencia de la funcion
console.log(resultado)//imprimimos

//my practice----------------------------------------------
let j = function(i,y){return i + y};

suma = j(10,10)
console.log(suma)


let p = function(m,k){return m / k}

divicion= p(8,2)
console.log(divicion)
//----------------------------------------------------------------

let x1 = function(n)
{
    const fib= [0,1]
    console.log(arguments.length)
    for(let i = 2; i < n; i++)
    {
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}

console.log(x1(5))