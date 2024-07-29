/*Herencia en JavaScript

---------------------------------------------------------------------------------------------------------------------

la herencia es fundamental en la programacion orientada a objetos y cyando trabajamos con js podemos aplicar este concepto
para reutilizar codigo y poder heredar caracteriasticas de una clase padre a una clase hija

--------------------------------------------------------------------------------------------------------------------
*/

/* creamos una clase padre Persona que posee atributos y metodos*/

class Persona {
    constructor(nombre,apellido)
    {
        this._nombre = nombre
        this._apellido = apellido
    }
    get getName(){
        return this._nombre;
    }
    set setName(nombre){
        return this._nombre = nombre
    }
    get getApellido(){
        return this.apellido
    }
    set setApellido(apellido){
        return this._apellido = apellido
    }
}

//creamos clase hija
/*usando (extends) podemos heredar todas las caracteristicas definidas de la classe padre Persona */
class Empleado extends Persona{
    constructor(nombre,apellido,departamento){//definir los parametros que se enviaran a la clase padre
        /*se debe mandar a llamar el constructor de la clase padre usando la palabra reservada super 
        se debe usar en la definicion del constructor de clase hija y pasar sus parametros */
        super(nombre,apellido)
        this._departamento = departamento/*se agrega guion bajo antes del atributo porque vamos a definir los metodos get y set para este atributo
        debido a que los metodos get y set  se van a llamar departamento no se puede llamar igual el atributo de nuestra clase por eso
        ponemos guion bajo antes */

    }
    get departamento(){
        return this._departamento
    }
    set departamento(departamento){
        this._departamento = departamento
    }
}


let persona1 = new Persona('eddy','talavera')// se debe llamar el constructor de la clase padre usando super
persona1.setName='alex'
console.log(persona1._nombre)

let empleado1 = new Empleado('jose','rodrigues','wiltetch')//objeto de clase hija incluyendo atributos de la clase padre y el objeto propio de esta
console.log(empleado1)
console.log(empleado1.getName)//el metodo get nombre se a heredado a la clase hija
empleado1.setName = 'luisa'
console.log(empleado1._nombre)//el metodo set nombre funciona correctamente

