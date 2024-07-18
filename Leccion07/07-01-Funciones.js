//Funciones en javascrip
//las funciones al ser objetos tambien tiene propiedades y metodos
//una funcion es un codigo reutilizable  y este codigo se puede mandar a llamar tantas veces como se necesite
miFuncion(2,6)

//de este modo declaracion de la funcion
function miFuncion (a,b)/*aqui iran los argumentos y estos pueden ser opcionales si hay mas de uno se usa coma*/
{
    //propiedad argument para saber cuantos argumentos tiene nuestra funcion
    console.log(arguments.length)//esta propiedaad se usa dentro de la funcion 
    //cuerpo de la funcion
    console.log("suma "+ (a + b))//por usar el contexto cadena se debe meter en parentecis la exprecion
}
//llamar la funcion
miFuncion(5,7);
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