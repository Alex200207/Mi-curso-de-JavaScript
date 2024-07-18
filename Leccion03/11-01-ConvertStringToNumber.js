//convertir un strign a numero
//NaN = not a number es un valor

let minumber = "18r";

//console.log(typeof minumber)

let edad = Number(minumber); //Number() Permite convertir un string a numero
//console.log(typeof edad)
console.log(edad);

//----------------------------------------------------------------------------
//NaN = not a number es un valor
if (isNaN(edad)) {
  //preguntamos primero si el valor es un numero con isNaN usando la funcion
  console.log("No es un numero ");
} else {
  // se realiza el codigo en caso de que sea un numero
  if (edad >= 18) {
    console.log("puede votar");
  } else {
    console.log("muy joven");
  }
}

//convertimos el estring a numero para poder usarlo en la condcional
//---------------------------------------------------------------------

//trabajo resumir el condicional
//usamos el operador ternario con una condicon que usa la funcion number para valor un numero

if (isNaN(edad)) {
  //preguntamos primero si el valor es un numero con isNaN usando la funcion
  console.log("No es un numero ");
} else {
  // se realiza el codigo en caso de que sea un numero
  let validacion = edad >= 18 ? "puede votar" : "muy joven";
  console.log(validacion);

  let miNumero = "356";
  console.log(miNumero);

  let test = Number(miNumero); //cambiamos el tipo con la funcion number
  console.log(test);
}
//-------------------------------------------------------------------
