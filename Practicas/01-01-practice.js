//ejercicio uno mostrar dos variables en pantalla
let nombre = "eddy alexis talavera espinoza";
var edad = 22;

console.log("mi nombre es: " + nombre + "mi edad es: " + edad);

/*Crea una variable que contenga tu nombre y otra que contenga tu apellido. 
Luego, concatena ambas variables con un espacio en medio y almacena el resultado 
en una nueva variable. Imprime la variable resultante en la consola.*/

var nombre1 = "luis";
var apellido1 = "Talavera";

nombreCompleto = nombre1 + " " + apellido1;
console.log(nombreCompleto);

/*Ejercicio 2: Concatenación de Cadenas (parte 2)
Declara una variable que contenga una frase y otra variable que contenga una palabra. 
Concatena ambas variables de manera que la palabra aparezca al final de la frase. Imprime el resultado en la consola.
Cuando lo tengas listo, compártelo y lo revisaré para darte el siguiente ejercicio.*/

var frase = "hola mundo bienvenido ";
var palabra = "Eddy";

concatenacion = frase + palabra;
console.log(concatenacion);

/*Ejercicio 3: Condicionales
Declara una variable number con el valor 20. Escribe un condicional que imprima 
"El número es mayor a 10" si number es mayor a 10.*/

number = 20;
if (number > 10) {
  console.log("El número es mayor a 10");
} else {
  console.log("el numero es menor a 10");
}

/*Ejercicio 3: Condicionales (parte 2)
Escribe un condicional que verifique si una variable age es mayor o igual a 18. 
Si es mayor o igual, imprime "Eres mayor de edad". Si no, imprime "Eres menor de edad".
Cuando completes esta parte, compártela y te proporcionaré el siguiente ejercicio. ¡Adelante!*/

var age = 20;
if (age >= 18) {
  console.log("eres mayor de edad");
} else {
  console.log("eres menor de edad");
}
/*Ejercicio 4: Bucles
Escribe un bucle for que imprima los números del 1 al 10 en la consola.
Cuando completes esta parte, compártela y te proporcionaré la siguiente. ¡Sigue así!*/

for (let i = 0; i < 11; i++) {
  console.log(i);
}

/*Ejercicio 4: Bucles (parte 2)
Crea una variable n con el valor 5. Escribe un bucle while que imprima "¡Hola!" en la consola n veces.*/
contador = 0;
let n = 5;
while (contador < n) {
  console.log("hola!");
  contador++;
}

/*Ejercicio 5: Funciones
Escribe una función llamada saludar que tome un nombre como parámetro y devuelva un saludo como "¡Hola, [nombre]!".*/

function saludar(nombre) {
  return "¡Hola, " + nombre + "!";
}

var saludo = saludar("Eddy");
console.log(saludo);

/*Ejercicio 6: Arreglos
Declara un arreglo con los nombres de tus frutas favoritas.
Luego, utiliza un bucle for para imprimir cada elemento del arreglo en la consola.
Cuando termines este ejercicio, compártelo y te proporcionaré el siguiente desafío. ¡Adelante!*/

let frutas = ["Limon", "Naranja", "Fresas", "Arandanos"];

for (let i = 0; i < frutas.length; i++) {
  console.log(i + ": " + frutas[i]);
}

/*Ejercicio 7: Objetos
Crea un objeto que represente un libro, con propiedades como titulo, autor, y anio.
Luego, imprime cada una de las propiedades en la consola.
Cuando termines este ejercicio, compártelo y procederemos con el siguiente desafío. ¡Sigue así!*/

libro = {
  titulo: "senor de los anillos",
  autor: "desconocido",
  anio: "no se que es eso",
};
console.log("Título:", libro.titulo);
console.log("Autor:", libro.autor);
console.log("Año:", libro.anio);

/*Escribe una función llamada díaSemana que tome un número como parámetro (1 para lunes, 2 para martes, etc.) 
y utilice un switch para imprimir el nombre del día de la semana correspondiente. 
Si el número proporcionado no corresponde a ningún día de la semana, debe imprimir "Número de día inválido".*/

function diaSemana(opcion) {
  switch (opcion) {
    case 1:
      console.log("Lunes");
      break;
    case 2:
      console.log("Martes");
      break;
    case 3:
      console.log("miercoles");
      break;
    case 4:
      console.log("jueves");
      break;
    case 5:
      console.log("viernes");
      break;
    case 6:
      console.log("sabado");
      break;
    case 7:
      console.log("domingo");
      break;
    default:
      console.log("esta opcion no existe");
  }
}
diaSemana(1);
diaSemana(2);
diaSemana(4);

/*Ejercicio 15: Calculadora Simple con Switch
Escribe una función llamada calculadora que tome tres parámetros: dos números 
(num1 y num2) y un operador (operador). El operador puede ser +, -, * o /. 
La función debe utilizar un switch para realizar la operación correspondiente 
y devolver el resultado. Si el operador no es válido, la función debe devolver 
un mensaje indicando que el operador no está soportado.*/

function calculadora(num1, num2, operador) {
  switch (operador) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      console.log("opcion no valida");
  }
}

console.log(calculadora(2, 5, "*"));

/*Ejercicio 16: Conversor de Temperatura
Escribe una función llamada conversorTemperatura que convierta temperaturas entre grados Celsius y Fahrenheit.
 La función debe tomar dos parámetros: el valor de la temperatura y una cadena que indique la unidad de entrada
  ("C" para Celsius o "F" para Fahrenheit). Utiliza un switch para realizar la conversión y devolver el resultado en la unidad opuesta.

La fórmula de conversión es:

De Celsius a Fahrenheit: F = (C * 9/5) + 32
De Fahrenheit a Celsius: C = (F - 32) * 5/9*/

function conversorTemperatura(temperatura, unidad) {
  switch (unidad) {
    case "c":
      return (temperatura * 9) / 5 + 32 + " grados";
    case "f":
      return ((temperatura - 32) * 5) / 9 + " grados";
    default:
      return "sin opciones";
  }
}

console.log(conversorTemperatura(30, "c"));

/* Ejercicio 17: Par o Impar con Operador Ternario
Escribe una función llamada esPar que tome un 
número como parámetro y utilice un operador ternario para devolver "El número es par" si el número es par 
o "El número es impar" si el número es impar.*/

function esPar(numero) {
  return numero % 2 === 0 ? "es par " : "es impar";
}
console.log(esPar(5));

/*Ejercicio 18: Calificación con Operador Ternario
Escribe una función llamada calificacion que tome
 un número como parámetro y utilice un operador 
 ternario para devolver una calificación basada 
 en el número proporcionado. Utiliza la siguiente escala:

A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59*/

function calificacion(numero) {
  return numero >= 90
    ? "A"
    : numero >= 80
    ? "B"
    : numero >= 70
    ? "C"
    : numero >= 60
    ? "D"
    : "F";
}

console.log(calificacion(70));
//-------------------------------------------------------------

//ejemplo con if

function calificacion1(puntaje) {
  if (puntaje >= 90) {
    return " A";
  } else if (puntaje >= 80) {
    return " B";
  } else if (puntaje >= 70) {
    return "B";
  } else if (puntaje >= 60) {
    return "D";
  } else {
    return "F";
  }
}
console.log(calificacion(50));

//casi lo mismo no ?
/*Ejercicio 18: Calificación con Función de Expresión y Self-Invoking
Escribe una función llamada calificacion como una función de tipo expresión que 
tome un número como parámetro y devuelva una calificación basada en el número 
proporcionado. Utiliza la siguiente escala:

A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59
Después, usa una función autoejecutable para probar la función calificacion. */

/*let X = (function (puntaje) {
  if (puntaje >= 90) {
    return " A";
  } else if (puntaje >= 80) {
    return " B";
  } else if (puntaje >= 70) {
    return "B";
  } else if (puntaje >= 60) {
    return "D";
  } else {
    return "F";
  }
})(
  //esta es la funcion self invoking
  function () {
    console.log(X(50));
  }
)();*/
//----------------------------------------------------------


/*Ejercicio 1: Modificar un valor primitivo dentro de una función
Escribe una función duplicarNumero que tome un número como parámetro y duplique su valor dentro de la función.
 Luego, imprime el valor original y el valor después de llamar a la función.*/

 let numero = 5

 function duplicarNumero(num){
    num = num * 2
    return num
 }

 console.log("este es el valor original: " + numero)
 resultado = duplicarNumero(numero);/*pasamos  copia del valor a duplicarNumero*/
 console.log('este es el valor despues de la funcion: ' + resultado)
 //------------------------------------------------------------------------------------------------



 /*Ejercicio 2: Cambiar el valor de un booleano dentro de una función
Crea una función cambiarBooleano que tome un booleano como parámetro y lo cambie a su opuesto (es decir, si es true,
 lo convierte en false y viceversa).
 Imprime el valor original y el valor después de llamar a la función.*/

 let resultado2 = true;

 function cambiarBooleano(booleano){
    return !booleano //diferenciar 
 }
cambio = cambiarBooleano(resultado2)
 console.log("valor original: " + resultado2)
 console.log("valor despues de la funcion: " + cambio )


 /*Ejercicio 1: Modificar propiedades de un objeto dentro de una función
Crea una función incrementarEdad que tome un objeto persona como parámetro y aumente
 en 1 unidad el valor de su propiedad edad.
 Luego, verifica si el objeto original ha sido modificado.*/


// Objeto persona con una propiedad edad
const persona = {
  nombre: "Juan",
  edad: 30
};

// Función que incrementa la edad de la persona en 1 unidad
function incrementarEdad(obj) {
  obj.edad++; // Incrementa la edad en 1 unidad post-incremento
}

// Imprimir el objeto original antes de llamar a la función
console.log("Objeto original:", persona);

// Llamar a la función y verificar el objeto después de la modificación
incrementarEdad(persona);
console.log("Objeto después de incrementar la edad:", persona);
//------------------------------------------------------------------------------------------------
// escribe tu respuesta acá

/*Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual 
a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.*/

function contrasenaValida(validar) {
  
  return validar === "2Fj(jjbFsuj" || validar === "eoZiugBf&g9";
}

console.log(contrasenaValida("2Fj(jjbFsuj")); // true
console.log(contrasenaValida("eoZiugBf&g9")); // true
console.log(contrasenaValida("hola")); // false
console.log(contrasenaValida("")); // false

//-------------------------------------------------------------------

const lq = (a,b) => a + b
result = lq(2,5)
console.log(result)
//---------------------------------------

let x = function(a,b){
  return a + b;
}
resultado = x(5,6)
console.log(resultado)
//--------------------------------------------