//mas sobre funciones flechas  

// seleccionamos el codigo
// para
// comenentar 
// usando {ctrl y  / }.

//si es una sola linea podemos ponerlo directamente sin usar llaves
// const miFuncion = () => console.log('saludos desde mi funcion flecha');



// const saludar = () => {
//     return 'Saludos desde funcion flecha'
// }
// console.log(saludar())

//si es una sola linea no se necesita el cuerpo de la funcion
//no es necesario utilizar el return 
const saludar = () => 'saludos desde mi funcion flecha'

console.log(saludar())

//podemos retornar un objeto pero para esto es necesario 
//meterlo en parentesis las llaves ya que la funcion la
//confundir con el cuerpo de una funcion
const regresaObjeto = ()=> ({nombre: 'juan',apellido:'talavera'})

console.log(regresaObjeto())


//resivir parametros 
//si solo es un parametro podemos usar sin parentecis
const funcionParametros = mensaje => console.log(mensaje)
funcionParametros('saludos con parametros')


//codigo clasico funcion de tipo exprecion
const funcionParametros2 = function(mensaje){
    return mensaje
}



console.log(funcionParametros2('hola bro como estas'))



const presentacion = (nombre) =>  nombre;

const saludar2 = (callback, nombre) => {
    return callback(`hola mi nombre es ${nombre}`);
}

console.log(saludar2(presentacion, 'eddy')); //pasamos la referenica de las funciones
