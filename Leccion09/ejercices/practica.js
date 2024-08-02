//herencia practica


class Persona {
    constructor(nombre,apellido){
        this._nombre = nombre
        this._apellido = apellido
    }
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido
    }
    set changeName(nombre){
        return this._nombre = nombre
    }
}


class Cocinero extends Persona{
    constructor(nombre,apellido,cargo){
        super(nombre,apellido)
        this._cargo = cargo
    }
    //utilizando concepto de sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ' ' + this._cargo
    }

}

let concinero1 = new Cocinero('alex','Talavera','maestro de concina')
console.log(concinero1)
concinero1.changeName = 'lopez'
console.log(concinero1.nombreCompleto())






