//Palabra reservada instanceOf en javaScript

/*Pregunta si el tipo que estamos reciviedno corresponde a cierta clase */

class Empleado {
    constructor(nombre,sueldo){
        this._nombre = nombre;
        this._sueldo =sueldo
    }
    ObtenerDetalles(){
        return `Empleado: nombre: ${this._nombre} sueldo: ${this._sueldo}`
    }
}


class Gerente extends Empleado {
    constructor(departamento,nombre,sueldo){
        super(nombre,sueldo)
        this._departamento = departamento
    }

    ObtenerDetalles(){
        return `Gerente depto: ${super.ObtenerDetalles()} ${this._departamento} `
    }

}

function imprimir(tipo){//aplicando polimorfismo
    console.log(tipo.ObtenerDetalles());
    if(tipo instanceof Gerente){//preguntamos si la variable es una instancia de la clase empleado
        //imprimira este mensaje 
        console.log('es un objeto de tipo Gerente')
    }
    if(tipo instanceof Empleado){
        console.log('es un objeto de tipo empleado')
    }
}


let empleado1 = new Empleado('eddy',2525)
let gerente1 = new Gerente('luis',5555,'sistemas')

imprimir(gerente1)
imprimir(empleado1)