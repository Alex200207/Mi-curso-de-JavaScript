//ejercicio numero par o impar
/*
un numero par es aquel que es divicible entre dos y un numero impar es lo contrario
*/

//defenimos una variable cambiante
let a = 10;

//uso de palabra reservada if para la condicional
if(a % 2 == 0){/*operador de modulo regresa el reesiduo de la divicion 
                decimos si "a" operador de modulo  '2' es "0" regresa true ejecuta esta parte.*/
    console.log("el numero es par")
}
else{//de lo contrario se ejecutara esta parte
    console.log("el numero no es par")
}