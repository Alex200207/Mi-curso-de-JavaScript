//creacion de constantes estaticas

class Persona {
    static contadorPersonas = 0;

    static get MAX_OBJ(){//funciona como una constante para nuestra clase de tipo persona
        return 5;
    }

    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){//creamos una condicional que solo permita crear 5 personas usando los atributos
            //staticos contadorPersonas y la constante MAX_OBJ
             this.idPersona = ++Persona.contadorPersonas;
        }
        else{
            console.log('se han superado el maximo de objetos permitidos')
        }
       
    }

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido + ' ' + this.idPersona
    }
    set changeName(nombre){
        return this._nombre = nombre
    }
    toString(){//convertimos los objetos en cadenas
        return this.nombreCompleto()
    }

}


let persona1 = new Persona('eddy','talavera')
let persona2 = new Persona('eddy','talavera')
let persona3 = new Persona('eddy','talavera')
let persona4 = new Persona('eddy','talavera')
let persona5 = new Persona('eddy','talavera')
let persona6 = new Persona('luis','jsj')

persona1.changeName ='jose'
console.log(persona1.toString())
console.log(persona2.toString())
console.log(persona3.toString())
console.log(persona4.toString())
console.log(persona5.toString())
console.log(persona6.toString())