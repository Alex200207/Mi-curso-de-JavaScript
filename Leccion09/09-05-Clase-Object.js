//clase Object, Metodo toString ,Sobrecarga y polimorfismo

/* cuando trabajamos con javaScript  podemos observar que estamos definiendo una clase persona y la clase empleado
esta clase extiende de la clase persona asi que la clase empliado es una clase hija de la clase persona
pero si no agregamos de manera explicita extends de manera automaticamente javaScript hace un extends de clase Object 
asi que la clase Object es la clase padre de todas las clases en javascript y esta contiene muchos metodos*/

/*metodo toString: imprime informacion del estado del objeto los valors actaules de cada uno de los atributos de los objetos 
y este metodo va ser muy importante para la definicon de nuestras clases ya que es buena practica agregar este metodo en la definicion
de nuestras clases 
*/

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
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido

    }
    //sobreescribiendo el metodo de la clase padre Object
    toString(){/*sobreescribimos el metodo toString de la clase padre utilizamos el mismo codigo del nombreCompleto */
        //se aplica el polimorfismo(multiples formas en tiempo de ejecucion )
        //el metodo que se ejecuta depende si es una referencia de tipo padre 
        //o de tipo hijo
        return this.nombreCompleto() 
    }

}

class Empleado extends Persona{
    constructor(nombre,apellido,departamento,ubicacion){
        super(nombre,apellido)
        this._departamento = departamento
        this._ubicacion = ubicacion

    }
    get departamento(){
        return this._departamento
    }
    set departamento(departamento){
        this._departamento = departamento
    }
    
    nombreCompleto(){
        return super.nombreCompleto() + ' ' + this._departamento+ ' ' +this._ubicacion

    }

}

//creamos objeto y probamos
let empleado1 = new Empleado('eddy','talvera','sistemas','jalapa')
console.log(empleado1)
console.log(empleado1.nombreCompleto())

//si estamos dentro de un navegador lo que se va visualizar es
/*console.log(empleado1.toString()) [Object Object] y esto no da informacion de nuetro objeto para esto lo que vamos a hacer
es sobreescribir el comportamiento del metodo toString heredado de clase Object.prototype . */

/*el metodo empleado manda a llamar el metodo toString y el metodo toString esta mandando a llamar el metodo nombreCompleto 
que metodo se ejecuta?? el metodo nombreCompleto de la clase hija? o el metodo nombreCompleto de la clase padre bueno
debido a que estamos imprimiendo de manera automatica el departamento esto implica que se esta mandando a llamar el metodo
definido en la clase hija a esto se le conoce como polimorfismo */

console.log(empleado1.toString())

/*El polimorfismo es un concepto clave en la programación orientada a objetos que permite a los objetos de diferentes 
clases ser tratados como objetos de una clase común. En JavaScript, aunque no es un lenguaje puramente orientado a objetos,
 se puede implementar polimorfismo de varias maneras, principalmente a través de la herencia y las interfaces. */