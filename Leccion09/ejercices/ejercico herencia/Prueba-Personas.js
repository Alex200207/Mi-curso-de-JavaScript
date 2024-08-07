//Ejercicio de Herencia en JavaScript

class Persona {
  static contadorPersona = 0;

  constructor(nombre, apellido, edad) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    this.idPersona = ++Persona.contadorPersona;
  }
  get IdPersona() {
    return this.idPersona;
  }
  get Nombres() {
    return this._nombre;
  }

  set Nombres(nombre) {
    return (this._nombre = nombre);
  }

  get Apellido() {
    return this._apellido;
  }

  set Apellido(apellido) {
    return (this._apellido = apellido);
  }
  get Edad() {
    return this._edad;
  }
  set Edad(edad) {
    return (this._edad = edad);
  }

  toString() {
    return `${this._nombre} ${this._apellido} Edad: ${this._edad} ID: ${this.idPersona}`;
  }
}

class Empleado extends Persona {
  static contadorEmpleados = 0;

  constructor(nombre, apellido, edad, sueldo) {
    super(nombre, apellido, edad);
    this.idEmpleado = ++Empleado.contadorEmpleados;
    this._sueldo = sueldo;
  }

  get IdEmpleado() {
    return this.idEmpleado;
  }

  get Sueldo() {
    return this._sueldo;
  }

  set Sueldo(sueldo) {
    this._sueldo = sueldo;
  }

  toString() {
    return `${super.toString()} Sueldo: ${this._sueldo} ID Empleado: ${
      this.idEmpleado
    }`;
  }
}

class Cliente extends Persona {
  static contadorClientes = 0;

  constructor(nombre, apellido, edad, fechaRegistro) {
    super(nombre, apellido, edad);
    this.idCliente = ++Cliente.contadorClientes;
    this._fechaRegistro = fechaRegistro;
  }

  get IdCliente() {
    return this.idCliente;
  }

  get FechaRegistro() {
    return this._fechaRegistro;
  }

  set FechaRegistro(fechaRegistro) {
    this._fechaRegistro = fechaRegistro;
  }

  toString() {
    return `${super.toString()} ID Cliente: ${this.idCliente} Fecha Registro: ${
      this._fechaRegistro
    }`;
  }
}
let persona1 = new Persona("eddy", "talavera", 22);
console.log(persona1.toString());

let empleado1 = new Empleado("alex", "talavera", 22, 222);
console.log(empleado1.toString());

let cliente1 = new Cliente("Juan", "Perez", 30, new Date());
console.log(cliente1.toString());
