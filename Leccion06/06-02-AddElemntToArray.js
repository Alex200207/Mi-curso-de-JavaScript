//mas formas de agregar elementos a un arreglo 
//ya concocemos la funcion push que agrega un valor al final del arreglo
//recordar que los elementos se cuentan desde el indice 0
//recapitulando length devuelve la cantidad de elementos de un arreglo

const autos =['mercedes', 'Land',"tesla"]
console.log(autos.length)//devulve el numero de elementos de mi arreglo al usar length 

//podemos agregar un elemento usando length de esta forma

autos[autos.length] = 'porshe';

console.log(autos) //de esta forma se agrega un elemento mas sin dejar indice vacios

autos[5] = 'supra'//agregamos un emento en el indice 6 automaticamente se creara el indice 5 y estara vacio
//no recomendado

console.log(autos)






//my practice -------------------------------------------------------------------

//modificar un elemento con cuerdo su indice
autos[5]=  'lambo'
console.log(autos)

//agrgar con length
autos[autos.length] = 'audi'
console.log(autos)

//agrgar con push 
autos.push('nose')
console.log(autos)

//espacios vacios
autos[10] = 'algo'
console.log(autos)
//---------------------------------------------------------------------------------------------