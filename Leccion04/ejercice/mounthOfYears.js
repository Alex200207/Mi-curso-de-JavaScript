let mes = 4;
estacion = "desconocido";

switch (
  mes //las comparaciones de switch son de tipo estricto
) {
  case 1:
  case 2:
  case 12: //agrupando variso casos para evaluarlos como en ejemplo del if
    estacion = "invierno";
    break;
  case 3:
  case 4:
  case 5:
    estacion = "primavera";
    break;
  case 6:
  case 7:
  case 8:
    estacion = "verano";
    break;
  case 9:
  case 10:
  case 11:
    estacion = "otono";
    break;
  default:
    estation = "valor incorrecto";
}
console.log(estacion);
