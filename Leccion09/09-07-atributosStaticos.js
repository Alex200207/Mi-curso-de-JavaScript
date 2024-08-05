//atributos estaticos en javascript



/* Los atributos staticos funcionan igual que los metodos staticos*/


class Persona {
    //definimos una variable statica en 0
    static contadorDeObjetosPersona = 0;//definiendo un atributo que pertenece a la clase y no aun objeto

    constructor(nombre, apellido) {
      this._nombre = nombre;
      this._apellido = apellido;
      Persona.contadorDeObjetosPersona++;//cada ves que se craa un objeto y se manda a llamar el metodo constructor se incrementara el contador de objetos del tipo persona
      console.log('se incrementa el contador a ' + Persona.contadorDeObjetosPersona)
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
  
    static saludar(){
      console.log('saludo desde el metodo static')
    }
    static saludar2(persona){
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
  
  Persona.saludar();
  Persona.saludar2(persona1);
  

  Empleado.saludar2(empleado1)

  //console.log(persona1.contadorDeObjetosPersona); esta forma asigna el atributo a nuestro objeto no funcionara
  console.log(Persona.contadorDeObjetosPersona)


  console.log(Empleado.contadorDeObjetosPersona)//las clases hijas heredan los atributos staticos
  
