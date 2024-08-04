//la palabra static en javascript

/* Las propiedades estáticas en clases de JavaScript permiten definir métodos y propiedades que pertenecen a la clase en sí misma, 
en lugar de a las instancias de la clase. Estas propiedades y métodos se pueden acceder directamente a través de la clase sin 
necesidad de crear una instancia de ella.*/



class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
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
    return this._nombre + " " + this._apellido;
  }
  toString() {
    return this.nombreCompleto();
  }

  static saludar(){//metodo statico es decir se va asociar con esta clase y no con los objetos que se crean de esta clase
    console.log('saludo desde el metodo static')
  }
  static saludar2(persona){//creamos un metodo estatico y le pasamos un objeto como argumento
    console.log(persona._nombre + ' ' + persona._apellido);
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido);
    this._departamento = departamento;
  }
  get departamento() {
    return this._departamento;
  }
  set departamento(departamento) {
    this._departamento = departamento;
  }

  nombreCompleto() {
    return super.nombreCompleto() + " " + this._departamento;
  }
}
let persona1 = new Persona('eddy','luis')
let empleado1 = new Empleado("eddy", "talvera", "sistemas");
console.log(empleado1);
console.log(empleado1.nombreCompleto());

console.log(empleado1.toString());


//persona1.saludar()persona1 no podra ejecutar los metodos staticos asi que por eso se dice que los
//metodos estaticos se asocian a una clase y no a los objetos creados apartir de ella 

Persona.saludar();/*asi de esta forma podemos usar los metodos staticos desde la clase y no de un objeto */

//podemos pasar como argumentos un objeto a un metodo estatic
Persona.saludar2(persona1);

//tambien podemos usarlo el metodo desde nuestra clase empleado
Empleado.saludar2(empleado1)

//recordar que los metodos staticos se asocian con nuestra clase y no con nuestros objetos