// const valor = prompt("ingrese su edad");

// if (Number(valor) == valor) {
//   if (valor >= 18) {
//     console.log("puedes conducir");
//   } else {
//     console.log("no puedes conducir");
//   }
// } else {
//   alert("no es numero");
// }
// //aprovado

/*En el siguiente ejercicio vamos a practicar con el bucle do while para que
 el código se ejecute una y otra vez hasta que el usuario decida parar
 
 Pide una nota (número). Muestra la calificación según la nota:
 */

// do {
//   let nota = prompt("ingresa tu nota ");

//   if (Number(nota) == nota) {
//     if (nota < 3) {
//       alert("Muy deficiente");
//     } else if (nota < 5) {
//       alert("Insuficiente");
//     } else if (nota < 6) alert("Suficiente");
//     else if (nota < 7) alert(" Bien");
//     else if (nota < 9) alert(" Notable");
//     else if (nota < 10) {
//       alert("Sobresaliente");
//     }
//   } else {
//     alert("nota erronea");
//   }
// } while (confirm("quieres seguir?"));

//aprovado

/*En el siguiente ejercicio vamos a practicar la concatenación de strings y el bucle do while

Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” 
deben mostrarse todas las cadenas concatenadas con un guión -. */

// var resultado = "";
// do {
//   var cadena = prompt("Ingresa una cadena de texto");

//   if (resultado == "") {
//     resultado = resultado + cadena;
//   } else {
//     resultado += "-" + cadena;
//   }
// } while (confirm("quieres seguir?"));

// console.log(resultado);

/*Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» 
y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */


// var suma = 0;
// do {
//   var numero = prompt("ingresa un numero");
//   if (Number(numero) == numero) {
//     suma += Number(numero);
//   } else {
//     alert("no es un numero");
//   }
// } while (confirm("quieres seguir?"));

// console.log(suma);

//aproved


