let a =3 , b = 2, c = 1, d = 4;

//Precedencia de operadores
//creamos expreciones mas complejas 
//una exprecion puede ser a * b se evalua de izquierda a derecha

let z = a * b + c / d
console.log(z)

z = c + a * b / d//se efectua la multiplicacion , despues la divicion y de ultimo se suma
console.log(z)

z = (c + a)*b / c//si usamos parentecis modificaremos el orden de prioridad
console.log(z)






//my practice ---------------------------------------------------------------------------------

let u = 5, y = 6, i=9
o = u * y + i
console.log(o)

o = u / y * i//se efectuo primero la mulit
console.log(o)

//----------------------------------------------------------------------------------------------