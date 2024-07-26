//aqui veremos mas formas de crear objetos en JavaScript
//mejores practicas


//forma ya vista en ejercicios anteriores
function Persona (nombre,apellido,edad){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
}

let madre = new Persona('andrely','Marisela','23');
console.log(madre)



let miObjeto = new Object(); //crear un objeto usando el metodo constructor Object esta opcion es mas formal
let miObjeto2 = {};//esta forma de crear un objeto es mas simplificada usando llaves para crear un obejto es mas comun


let miCadena = new String('hola');//crar un obejto utilizando la funcion constructor de tipo string sintaxis mas formal no es lo mas recomendable
let miCadena2 = 'hola';//forma mas simplificada de crear un obejto de tipo cadena 


let miNumero = new Number(5);//crear un obejto utilizando la funcion constructor de tipo numero sintaxis mas formal no es la mas recomendada
let miNumero2 = 5;//forma mas simplificada de crear un obejto de tipo numero es la mas comun

let miBolean = new Boolean();//podes aplicar los mismos conceptos pero con boleanos
let miBolean2 = true;

let miArreglo = new Array();
let miArreglo2 = [];//sintaxis mas simplificadas solo con el uso de []

let miFuncion = new Function();
let miFuncion2 = function(){}//sintaxis mas simplificadas de una funcion 

//y asi se puede trabajr con todos los tipo de javascript