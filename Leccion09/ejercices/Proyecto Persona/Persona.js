//Ejercicio de Herencia en JavaScript

class Persona{
    static contadorPersona = 0;
    
    constructor(nombre,apellido,edad){
        this._nombre =nombre;
        this._apellido = apellido;
        this._edad = edad;
        this.idPersona = ++Persona.contadorPersona;
    }
    get IdPersona(){
        return this.idPersona
    }
    get Nombres(){
        return this._nombre
    }

    set Nombres(nombre)
    {
        return this._nombre = nombre
    }

    get Apellido(){
        return this._apellido
    }

    set Apellido(apellido){
        return this._apellido = apellido
    }
    get Edad(){
        return this._edad
    }
    set Edad(edad){
        return this._edad = edad
    }

    toString(){
        return  `${this._nombre} ${this._apellido} Edad: ${this._edad} ID: ${this.idPersona}`
    }
}



