//sobreescritura en javaScript


/*quiere decir que desde clase hija vamos a modificar el comportamiento definido en el metodo de la clase padre
y eso lo haremos por que el metodo de la clase padre no esta completo viendolo desde la clase hija le falta el atributo de departemento
por eso aplicaremos el concepto de sobrrescritura para modificar el comportamiento definido desde la clase padre */



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
}

class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido)
        this._departamento = departamento

    }
    get departamento(){
        return this._departamento
    }
    set departamento(departamento){
        this._departamento = departamento
    }
    //sobreescritura
    nombreCompleto(){// en este caso no resive ningun parametro por lo tanto ya estamos sobreescribiendo el metodo de la clase padre
        return super.nombreCompleto() + ' ' + this._departamento/*si ponemos super y luego punto podemos acceder al metodo definido
        en la clase padre de esta manera no se pasa el codigo definido en el metodo padre  */
    }
}

//creamos objeto y probamos
let empleado1 = new Empleado('eddy','talvera','sistemas')
console.log(empleado1)
console.log(empleado1.nombreCompleto())




