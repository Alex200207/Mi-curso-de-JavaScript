class Empleado extends Persona {

  static contadorEmpleados = 0;
  constructor( sueldo) {
    this.idEmpleado = ++Empleado.contadorEmpleados;
    this._sueldo = sueldo;
  }
  get idEmpleado(){
    return this.idEmpleado
  }
  get Sueldo() {
    return this._sueldo;
  }
  set setSueldo(sueldo) {
    return (this._sueldo = sueldo);
  }
  toString(){
    return `${super.toString()}Sueldo: ${this._sueldo}ID: ${this.idEmpleado}`
  }
}


