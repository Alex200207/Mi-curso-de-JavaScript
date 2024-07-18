//ejercicio tarea de udemy
/*6am -11 am-Buenos dias
12pm -18pm-buenas tardes
19pm-24pm buenas noches
0am 6am durmiendo*/

let hora = 10;
let mensaje;

if (hora >= 6 && hora <= 11) {
  //usando el operador logico and que devuelve true si ambos valores son verdaderas
  mensaje = "Buenos dias";
} else if (hora >= 12 && hora <= 18) {
  mensaje = "buenas Tardes";
} else if (hora >= 19 && hora <= 24) {
  mensaje = "Buenas noches";
} else if (hora >= 0 && hora < 6) {
  mensaje = "duermiendo";
} else {
  mensaje = "valor incorrecto";
}
console.log(mensaje);
