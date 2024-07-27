//Uso de prototype en javascript 

//con prototype podemos agregar mas propiedas y valores a los obejtos derivados de un constructor sin necesidad de agregar la propiedad
//dentro del constructor

//ejemplo

function Persona(nombre,edad,apellido){//creado un constructor Persona con 3 propiedades
    this.nombre = nombre
    this.edad =  edad
    this.apellido = apellido
}
//sintaxis :
//NombreDelConstructor.prototype.NuevaPropiedad = "valorOpcional";

Persona.prototype.telefono = "55225566"//de esta forma agregamos una propiedad telefono  a los obejto de tipo Persona
//podemos agregar un valor o dejarlo vacio para que se pueda agregar al momento de ingresar datos al objeto

Persona.prototype.loquesea = 'hdhedhdeh'

let padre = new Persona('Wilmer',42,'Hernandez')//agregamos datos a las 3 propiedaes heredadas al objeto
console.log(padre)

let madre =  new Persona('Mildred',40,'Liseth')
//si queremos modifocar el valor original de telefono para el objoto madre podemos hacer lo siguiente
madre.telefono = 5812268//de esta forma
console.log(madre)