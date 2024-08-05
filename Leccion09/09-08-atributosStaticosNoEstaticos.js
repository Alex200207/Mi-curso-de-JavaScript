//atributos estaticos  vs atributos no estaticos en javascript


/*Los atributoss no estaticos son los que se asocian con un objeto apartir de una clase y no con la clase asi misma */
//atributos estaticos se asocian con una clase y no con los objetos creados apartir de ella

class Persona {
    //atributo de nuestra clase
    static contadorDeObjetosPersona = 0;
    //atributo de nuestros objetos
    email = 'valor default email';//este atributo no este static por lo tanto es un atributo que se asocia con nuestros objetos y no con la clase en si misma 
    constructor(nombre, apellido) {
        //nombre y apellido son atributos no estaticos
      this._nombre = nombre;
      this._apellido = apellido;
      Persona.contadorDeObjetosPersona++;
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

  console.log(Persona.contadorDeObjetosPersona)
  console.log(Empleado.contadorDeObjetosPersona)

  console.log(persona1.email)//de esta manera se declaran atributos de nuestra clase 
  //pero son atributos no staticos que se relacionan con los objeto y no con la clase asi misma
  console.log(empleado1.email)


  console.log(Persona.email)//no funcionara con la clase pues no es un atrubuto statico
  console.log(Empleado.email)
  
