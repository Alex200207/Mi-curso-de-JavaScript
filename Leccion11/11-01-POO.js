//Sobreescritura en javaScript
/* */
class Empleado {
    constructor(nombre,sueldo){
        this._nombre = nombre;//una buena practica usar guion bajo en los atributos
        this._sueldo = sueldo;
    }
    obtenerDetalles(){
        return `${'Empleado: ' + 'Nombre: ' + this._nombre} 'Sueldo: + ${this._sueldo}`
    }

}


class Gerente extends Empleado{
    constructor(departamento,nombre,sueldo){
        super(nombre,sueldo)
        this._departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente ${super.obtenerDetalles()} depto: ${this._departamento}`
    }
}


let gerente = new Gerente('sistemas','eddy',655)
console.log(gerente.obtenerDetalles())

let empleado = new Empleado('eddy','565')
console.log(empleado.obtenerDetalles())