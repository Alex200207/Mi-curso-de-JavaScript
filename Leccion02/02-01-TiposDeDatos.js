/*
Ejemplo de tipos de 
datos en JavaScript

en javascrip las varriables son dinamicas
tampoco se especifican los tipos de variables
*/

//Tipo de dato string
var nombre = "eddy";
console.log(nombre);

/*podemos cambiar tanto el valor como la variable*/
nombre = 10;
console.log(typeof nombre);

//typeof podemos ver el tipo de datos
nombre = 10.5;
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipos de dato objet
var objet = {
  //en un objeto para asignar valor se usa :
  nombre: "juan",
  apellido: "Perez",
  Telefono: "22445566",
};

console.log(typeof objet);

//Tipo de dato Boolean puede tener los valore de true o false
var bandera = true;
console.log(typeof bandera);

//Funtion asu ves es un tipo de dato
//una funcion nos permite reutilizar lineas de codigo las veces requeridas
function miFuntion() {}
console.log(typeof miFuntion);

//Tipo de dato Symbol
//se utiliza para crear un valor unico de una variable
var simbolo = Symbol("mi simbolo"); //podemos pasar una cadena o valor etc
console.log(typeof simbolo);

//Las clases en javascrip tambien son funciones
//Tipos clase es una funcion
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre; //this permite hacer referncia a los atributos de la clase
    this.apellido = apellido;
  }
}
console.log(typeof Persona);

class eddy {
  constructor(cedula,nombre){
    this.cedula =cedula;
    this.nombre = nombre;
  }
}

//Tipo de dato undefined
//este tipo de datos esta automatico en cualquier tipo de variable
//undefined se puede usar como valor
var x;
console.log(typeof x);

x = undefined;
console.log(x);

//null significa ausencia de valor
var y = null;
console.log(typeof y);

//los arreglos en javascrip son de tipo objet
//Array
var auto = ["bmw", "audi", "volvo"]; //parece una lista como python
console.log(auto);
console.log(typeof auto);

//asignacion de una cadena vacia
var z = "";
console.log(z); //cadena vacia
console.log(typeof z);

//test de una funcion segun yo
//----------------------------------------------
function miobjeto(objeto) {
  objeto = {
    nombre: "eddy",
    apellido: "talavera",
  };
  return objeto;
}

var miNuevoObjeto = miobjeto(); // Llama a la función y asigna el resultado a una variable
console.log(miNuevoObjeto); // Imprime el objeto devuelto por la función

function operaciones(a, b) {
  var resultado = a + b;
  return resultado;
}
console.log(operaciones(2, 5));
//----------------------------------------------

//en js se puede declarar solo con el nombre
//literal es el valor que asignamos a una variable
let nombre3;//lo usan para definir variables que pueden cambiar su valor
nombre3 = "juan";
console.log(nombre);

//-------------------------------
const apellido = 'perez'
apellido = 'lara'//no se permite asignar valor nuevo a una constante no se pueden modifcar
//-----------------------------
