//Ejemplo de uso de la palabra Static en JavaScript

class Persona {

    static contadorPersonas = 0;

    constructor(nombre, apellido) {
      this._nombre = nombre;
      this._apellido = apellido;
      this.idPersona = ++Persona.contadorPersonas;//por cada objeto creado asignamos un identificador ya que incrementamos el contador statico
    }
    get getName() {
      return this._nombre;
    }
    set setName(nombre) {
      return (this._nombre = nombre);
    }
    get getApellido() {
      return this.apellido;
    }
    set setApellido(apellido) {
      return (this._apellido = apellido);
    }
    nombreCompleto() {
      return this.idPersona + ' ' + this._nombre + " " + this._apellido;
    }
    toString() {
      return this.nombreCompleto();
    }
  
    static saludar(){
      console.log('saludo desde el metodo static')
    }
    static saludar2(persona){
      console.log(persona._nombre + ' ' + persona._apellido);
    }
}

let persona1 = new Persona('eddy','talavera')
console.log(persona1.toString())

let persona2 = new Persona('luis','cardenas')
console.log(persona2.toString())