//Hoisting y clases en JavaScritp

/*cuando trabajamos con clases no se aplica el concepto de hoisting esto quiere decir
que primero tenemos que definir nuestra clase para poderla utilizar en cambio
cuando trabajamos con funciones podemos primeramente mandar a llamar la funcion
y posteriormente definir esta funcion ya que se aplica el concepto de hoisting cuando
trabajamos con funciones y con varibles cuando  las declaramos como tipo var  sin embargo 
cuando trabajamos con clases esto no ocurre asi por lo tanto  si queremos crear un objeto
de tipo persona antes de haber declarado la clase entonces no vamos a poder crear este objeto ya que no se aplica 
al concepto de hoisting*/


//error al crear el objeto antes de definir la clase......
/*let persona1 = new Persona('eddy','talavera') //Cannot acces 'Persona' before initialization
persona1.changeNombre = 'luis'
console.log(persona1.nombre)*/

//no es posible crear objetos antes de crear la clase no aplica el concepto de hoisting
class Persona {

    constructor(nombre,apellido){
  
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set changeNombre(nombre){
        this._nombre = nombre
    }

}





//------------------------------------------------------------------------------------