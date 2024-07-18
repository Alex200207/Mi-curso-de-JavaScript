//Sentencias de Control

let condicion = false;

if (condicion) {
  //podemos quitar las llaves si nuestra linea de codigo es una
  console.log("condicion verdadera");
} else {
  //aqui igual
  console.log("condicion falsa");
}

//ejemplo practico--------------------------------


let numero = 1;

if (numero == 1) {
  console.log("Numero uno");
} else if (numero == 2) {
  console.log("numero 2");
} else if (numero == 3) {
  console.log("Numero 3");
} else if (numero == 4) {
  console.log("numero 4");
} else {
  console.log("numero desconocido");
}
//------------------------------------------------

//year station

let mounth = 11
let estation;

if(mounth == 1|| mounth == 2 || mounth == 12){
    estation = "invierno"
}
else if (mounth == 3|| mounth == 4|| mounth == 5)
{
    estation = "primavera"
}
else if(mounth == 6|| mounth == 7|| mounth == 8){
    estation = "verano"
}
else if(mounth == 9||mounth == 10|| mounth == 11)
{
    estation ="Otono"
}
else{
    estation = "valor incorrecto"
}
console.log(estation)
//--------------------------------------------------
