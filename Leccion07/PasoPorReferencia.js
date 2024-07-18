//paso por referencia
//creacion de objeto en memoria 0x333 o cualquier valor hexadecimal 
const persona = {//definamos la variable como constante es una buena practica
    nombre:'eddy',
    apellido:'talavera'
}

function cambiarValorObejet(p1){//variable p1 solo existe cuando se ejecuta el metodo
    p1.nombre = 'Carlos'//accedemos al atriubuto del objeto creado
    //esto es paso por referencia del objeto en memoria
    p1.apellido = 'luis'
}

//paso por referncia
//llamar el metodo y pasar la referencia del objeto creado
cambiarValorObejet(persona)//pasamos la referencia del objeto personal 
//cuando mandamos a llamar el obejto cambiarvalorobjeto estamos pasando la referencia a la variable p1 
//por lo tanto podemos acceder a los mismo atributos
console.log(persona)


//diferencias entre paso por valor 
/*el paso por valor no permite modificar el valor de una variable en uso aunque haya sido definida fuera de un metodo una
ves que tratamos de mandar imprimir el valor y modificar el valor desde otro metodo no va ser posible ya que es un tipo primitivo 
no tiene ni atributos ni meotodos y por lo tanto solo se pasa una copia del valor no se modifca el valor de la variable original

pero cuando  trabajamos con objetos en este caso persona tenemos atributos y cuando queremos cambiar el valor de los atributos del metodo
es posible siempre y cuando se pasen las referencias del obejto esto es paso por referencia y entonces es posible mantener los cambios
incluso una ves terminados la ejecucion de la funcion que realizo los cambiso al obejto persona*/


//practice -------------------------------------------------------------------------



