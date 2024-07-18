//-----------------------------------------------------------------------------------------
//mejores practicas para declarar nombres de variables
let nombreCompleto ='juan perez'//notacion de altas y bajas
console.log(nombreCompleto)
//console es un objeto de js y log es un metodo o funcion dentro de los parectesis esta el argumento 
//que necesita la funcion.

//------------------------------------------------------------------
//de esta forma podemos definir varias variables en una misma linea
let x,y;
x = 10, y = 20;
let z = x + y;
console.log(z)

//------------------------------------------
//javascrip es sencibles a mayusculas y minusculas 
let nombreCompleto2 = 'juan perez'
let nombrecompleto2 ='eddy talavera'
console.log(nombreCompleto2)
console.log(nombrecompleto2)
//tienen el mismo nombre pero la c es minuscula js la pasa como una variable totalmente diferente
//------------------------------------

//reglas para escribir un nombre de una variable
//no comensar una variable con numero (1nombre) 
//let 1nombre ="juan"  incorrecto
//unicos caracteres permitidos son mayusculas y minusculas tambie ( _ o $)
let $nombre = "eddy"
let _nombre = "luis"
let Nombre="jorge"
/*aclaracion importantes despues de inciar con cualquier de los caracteres permitidos
podremos usar numero entre otros*/
let a1nombre = "carlos"

//palabras reservadas no se pueden usar para nombrar variables
//ejem
/* abstract ,argument ,await ,boolean ,
break ,byte, case, cacth, char, class*, const,
continue, debbuger, default, delete, do,
double, else, enum* ,eval* ,export, extends*, 
false, final, finally , float, for , funtion,
goto, if, implements, import*, in ,
instanceof, int ,interface ,let* ,long, native,
new, null ,package, private, protected, public
return , short, static, super*, switch, sychronized, this,
throw,throws,transient,true,try,typeof,var,void,
volatile,while,with,yield*/
//-----------------------------------------