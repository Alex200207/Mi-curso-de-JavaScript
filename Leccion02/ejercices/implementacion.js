//crar una clase , arrelo,function,objeto y symbol
//------------------------------------------
//clases
class Usuario {
  constructor(nombre, apellido) {
    (this.nombre = nombre), (this.apellido = apellido);
  }
}
console.log(Usuario);

class telefono {
  constructor(marca, modelo) {
    (this.marca = marca), (this.modelo = modelo);
  }
}
//--------------------------------------------------------

//obejto

var obejto = {
  nombre: "eddy",
  apellido: "mostroso",
};
console.log(obejto);

var objeto2 = {
  nombre: "andrely",
  apellido: "gutierres",
};
console.log(objeto2);
//--------------------------------------------

//arreglo

var auto = ["ford", "toyota", "lambo"];
console.log(auto);

var celular = ["xiaomi", "samsung", "apple"];
console.log(celular);

//------------------------------------------------------------
//ejemplo de funcion
function myfuncion() {}
console.log(myfuncion);

function my2funcion() {}
console.log(my2funcion);
//-----------------------------------------
//symbol
var simbolo = Symbol("hola");
console.log(simbolo);

var figura = Symbol("triangulo");
console.log(figura);

//-----------------------------------------

//function utilizada en una suma

function mySuma(a, b) {
  resultado = a + b;
  return resultado;
}
const resultadoDESuma = mySuma(5, 8);
console.log(resultadoDESuma);

//uso de una clase

// Definición de la clase Persona
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Método para saludar
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Crear una instancia de la clase Persona
const persona1 = new Persona("Juan", 25);

// Usar el método saludar
persona1.saludar(); // Salida: Hola, mi nombre es Juan y tengo 25 años.
