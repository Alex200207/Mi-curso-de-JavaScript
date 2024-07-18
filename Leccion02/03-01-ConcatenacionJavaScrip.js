//concatenar en js
var nombre = "eddy"
var apellido = "talavera"


var nombre_completo = nombre + ' ' + apellido;
console.log(nombre_completo)


//segunda forma de concatenar
var nombre_completo2 = 'carlos' + " " + "lara"
console.log(nombre_completo2)

//en js se evalua de izquierda a derecha y como 
//nombre es una cadena el numero pasa a ser una esto se llama contextostring
var x = nombre + 219
console.log(x)

//si queremos que los valores se sumen
// al poner en parentesis entonces toma preoridad la suma y se concatena con la cdena luego
x = nombre + (2 +4)
console.log(x)


/*qui toma la suma porque en js las expresione se toman de izquierda a derecha
como el primer valor es un numero y el segundo tambien 
se efectua la suma y se concatena*/
x = 2 + 4 + nombre
console.log(x)