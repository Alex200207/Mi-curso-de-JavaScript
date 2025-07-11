//Funciones en javascrip
//las funciones al ser objetos tambien tiene propiedades y metodos
//una funcion es un codigo reutilizable  y este codigo se puede mandar a llamar tantas veces como se necesite
miFuncion(2,6)

//de este modo declaracion de la funcion
function miFuncion (a,b)/*aqui iran los parametros y estos pueden ser opcionales si hay mas de uno se usa coma*/
{
    //propiedad argument para saber cuantos argumentos tiene nuestra funcion
    console.log(arguments.length)//esta propiedaad se usa dentro de la funcion 
    //cuerpo de la funcion
    console.log("suma "+ (a + b))//por usar el contexto cadena se debe meter en parentecis la exprecion 
}
//llamar la funcion
miFuncion(5,7);//estos son argumentos
//esta funcion se puede mandar a llamar antes o despues de definirla a esto se le llama hoisting se puede llamar en cualquier parte del prgrma

//convertir nuestra funcion a texto
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto)


//usamos return
/*return:  regresa un valor a la funcion*/


//my practice ------------------------------------------------------------------------------------

function mySuma(a,b){
    console.log("suma " + (a+b))
}
mySuma(5,6)

//otra forma usando return

function myResta(a,b){
    return a - b
}
let resultado =(myResta(5,2))
console.log(resultado)
//--------------------------------------------------------------------------------------------------------------

//formula de la succesion de fibonacci
//fibonacci es una serie de numeros que comienza con 0 y 1 y luego cada numero es la suma de los dos anteriores
//formula 
//fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)



const myfunFibonacci = (n) => {
    const fib = [0,1]
    for(let i = 2; i < n; i++)
    {
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
} 

console.log(myfunFibonacci(5))



const fib2 = (n) => {
    const fib = [0,1]
    for(let o = 2; i < n ; i++){
        fib[o] = fib[o-1] + fib[o-2]

    }
    return fib
}

console.log(fib2(5))