//Polimorfismo en JavaScript Repaso

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
    return tipo.ObtenerDetalles();
}
/*ya que una linea de codigo puede ejecutar el metodo de la clase padre o de la clase
hija ya que polimorfismo significa multiples formas en tiempo de ejecucion
*/
let empleado1 = new Empleado('eddy',2525)
let gerente1 = new Gerente('sistemas','luis',5555)

console.log(imprimir(gerente1))
console.log(imprimir(empleado1))