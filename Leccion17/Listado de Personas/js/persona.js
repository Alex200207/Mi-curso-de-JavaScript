class Persona {//creamos una clase persona
    constructor(nombre, apellido) {//creamos un constructor que recibe un nombre y un apellido
      this._nombre = nombre;
      this._apellido = apellido;
    }
    get nombre() {//creamos un metodo get para obtener el nombre
      return this._nombre;
    }
    set nombre(nombre) {//creamos un metodo set para asignar un nombre
      return (this._nombre = nombre);
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
      return (this._apellido = apellido);
    }
  }
  