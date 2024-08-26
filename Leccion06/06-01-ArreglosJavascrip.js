//arreglos en java scrip es un tipo objet que permite almacenar varios valores se puede declarar de diferentes formas

/*let autos = new Array('BMW',"Mercedes Benz",'Volvo');//forma clasica ya no es recomendad
console.log(autos)*/

const autos = ["BMW", "Mercedes Benz", "Volvo"]; //si se usa const ya no se podra agregar una referencia a la memoria del arreglo
console.log(autos); //atraves de la variable auto podemos acceder a los datos del arreglo
//los elementos comienzan desde 0
console.log(autos[0])//de esta forma podemos haceder al indixe de nuestro arreglo y mostrar un solo valor 
console.log(autos[1])
console.log(autos[2])

//si queremos recorrer todo los elemtnos de una ves usamos for
//length proporsiona la  cantidad de elementos que tiene nuestro arreglo
for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i])//imprimimps cada uno de los elementos utilizando nuestra variable de incremento
}


autos[1] = "MercedesBenz"//modificar un valor del indixe se ingresa el indice  a modificar y se indica el valor
console.log(autos)

//agregar valores a un arreglo con la funcion push
autos.push('Audi');//se agrega el elemento al final del arreglo
console.log(autos)



//my practice ------------------------------------------------------------------------

const celular = ['Iphone','Motorola','Samsung']//creamos el arreglo con una constate para que no se pueda cambiar

for(let j = 0; j < celular.length; j++)
{
    console.log(j + ' : ' + celular[j])
}

//modifiquemos un valor
autos[1] = 'LandCruzer'
//agregemos un valor mas usando la funcion push
autos.push('Toyota')

console.log(autos)

//creemos otro arreglo que recorra todos los valores de una ves

for(l =0; l < autos.length;l++)
{
    console.log(l + ' : ' + autos[l])
}



//recorrimos lo elemenos y mostramos su indice y elemento usando el ciclo for
//-------------------------------------------------------------------------------------------------

arreglo = [1,2,4,5,6,7,8,9,10]

for(let x = 0;x < arreglo.length; x++){
    console.log(x + ':' + arreglo[x])
}