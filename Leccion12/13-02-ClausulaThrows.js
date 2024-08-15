//clausula throws
/*arroja una nueva excepcion  */
"use strict";//use estricto para evitar usar variables sin haberlas declarado

const result = -1;
try{
    if(isNaN(result)) throw ' no es un numero';// si no es un numero arrojaremos el mensaje dentro de throw
    else if (result === '') throw 'cadena vacia';
    else if(result >= 0) throw ' valor positivo ';
    else if(result < 0) throw ' valor negativo';
}
catch(err){
    console.log(err)//
    //console.log(err.name)//nombre tipo de error que se esta arrojando
    //console.log(err.message)//mensaje del error
}
finally{
    console.log('termina revision de errores')//este bloque siempre se ejecuta
}

