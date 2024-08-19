let numero =  4

let numeroTexto = 'valor desconocido'

switch(numero)//entre parentesis  la exprecion en este caso el numero que vamos a comparar
{
    case 1:
        numeroTexto = "numero 1"//si el caso concide con el valor de 1 se le asigna la variable numeroTexto

        break;//la sentencia break rompe la estructura switch si no lo agregamos se ejecuta el siguiente caso 
        //sin realizar la comparacion

    case 2:
        numeroTexto = "numero 2"//lo mismo pero distinta nombre de la variable
        break
    
    case 3 :
        numeroTexto = "numero 3"
        break
    
        case 4:
            numeroTexto ="numero 4"
            break
        default://en caso de que no concidan con nigun caso
            numeroTexto = "no existe este numero"
}
console.log(numeroTexto)


//my practice --------------------------------------
console.log("Dias de la semana ")
let numeroDeDia= 2

let Dia ="dias desconocido"

switch(numeroDeDia)
{
    case 1:
        Dia = "lunes"
        break;
    case 2:
        Dia = "martes"
        break;  
    case 3:
        Dia ="miercoles"
        break;
    default:
        Dia ="dia no asignado"

}
console.log(Dia)
//-----------------------------------------------

//menu de preguntas usando funciones flechas y funcion callback , setTimeout

const imprimir = (mensaje) => console.log(mensaje)

const menu = (opcion,mensajes) => {
    switch(opcion){
        case 1:
            return mensajes(`que tal te va`)
        case 2:
            return mensajes('donde estas')
        case 3:
            return mensajes('que haces')
        default:
            return 'la opcion elejida no existe' 
    }

} 

setTimeout(() => menu(3,imprimir),3000)
