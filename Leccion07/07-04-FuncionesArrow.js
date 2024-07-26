
//esta es una funcion de tipo expresion
let sumar = function (a, b) {
  return a + b;
};

resultado = sumar(5, 5);
console.log(resultado);

//Funciones flechas
//esta tipo de funcion es muy similar a las funciones de tipo expression

//aremos el ejemplo de funcion de tipo expresion pero usando la funcion tipo flecha 
//usaremos en este caso una constante ya que es mas recomendable
//asi no cambiar la referencia o valor asiganado a la variable
//ya no tenemos que usar function , en lugar de abrir y cerrar llaves se usa el operador de flechas =>
//ya no tenemos que usar return solo agregamso el valor que va regresar la funcion seguido de la flecha

const sumaFuncionArrow = (a,b) => a + b;

resultado = sumaFuncionArrow(5,8)
console.log(resultado)
//de esta manera se usa la funcion de tipo esprecion pero usando la sintaxis de tipo felcha








//my practice ----------------------------------------------

const restaFuncionArrow = (a,b) => a - b;
resultado = restaFuncionArrow(5,2)
console.log(resultado)

const divFunctionArrow = (a,b) => a / b ;
resultado = divFunctionArrow(8,3)
console.log(resultado)

const multiFunctionArrow = (a,b) => a *b;
resultado = multiFunctionArrow(5,2)
console.log(resultado)


const moduloFunctionArrow = (a,b) => a % b
resultado = moduloFunctionArrow(8,2)
console.log(resultado)

const expoFunctionArrow = (a,b) => a**b
resultado = expoFunctionArrow(2,2)
console.log(resultado)

const Nombre = (nombre) => {
  nombre = 'eddy' 
  return nombre.toUpperCase();
}
console.log(Nombre())

//------------------------------------------------------------