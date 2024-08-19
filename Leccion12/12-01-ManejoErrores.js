//Bloque try catch finally en JavaScript
"use strict";//inciar modo estricto
/*try: El bloque try contiene el código que puede generar una excepción.
 Es el lugar donde colocas el código que quieres ejecutar y que podría fallar. 
 
 catch: Si ocurre una excepción dentro del bloque try, el control se transfiere al bloque 
 catch. Aquí puedes manejar el error o proporcionar un mensaje para el usuario.
 
 finally: El bloque finally se ejecuta después de que se haya ejecutado el bloque try y, 
 si se encuentra, el bloque catch. Este bloque se ejecutará sin importar si ocurrió una excepción o no. 
 Se utiliza para realizar tareas de limpieza, como cerrar archivos o liberar recursos
 */
try{
    x = 10;
}
catch(err){//pasa parametro
    console.log(err)
}

finally{//opcional

    console.log('termina la revison de errores')
}


//---------------------------
