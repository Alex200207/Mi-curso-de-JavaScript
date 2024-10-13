//paso por valor y paso por referencia


/*es cuando utlizamos tipo que no son objetos ejemplo tipos numericos boleanos ejme.*/

//Tipos primitivos
let x = 10;//valor primitivo
//intentaremos cambiar el valor de x desde el metodo


//creamos un metodo para cambiar el valor desde el metodo
//esto se conoce como paso por valor es pasar una copia del valor al metodo que se va mandar a llamar
function cambiarValor(a){
    a = 5
    console.log(a)
}
//paso por valor
cambiarValor(x)//10 pasamos el valor de 10
console.log(x)

//my practice ------------------------------

//mantendremos nuestro dato primitivo inmutado

let nombre = 'eddy'

function cambiarNombre(name){
    name 
}
cambiarNombre(nombre)//aqui se pasa el valor de eddy al parametro name asi podemos modificar sin cambiar el valor original
console.log(nombre)


// otro ejemplo pero con un apellido
let apellido = 'talavera'

function cambiarApellido(j){
    j = 'peralta'
    console.log(j)
}
cambiarApellido(apellido)//pasamos el valor apellido a la funcion cambiarApellido que tiene el parametro j
//se crea una copia en el parametro j que puede ser modificada y evita cambiar el valor original
console.log(apellido)

//---------------------------------------------------------------------------

let referencia = 10;


const cambiarReferencia = (loquesea) => {
    loquesea += 5;
    console.log(loquesea)
    //usamos un operador de asignacion para sumar 5  al valor de loquesea
    //este valor no se modifica en la variable original
    //solo dentro de la funcion

}
cambiarReferencia(referencia)

