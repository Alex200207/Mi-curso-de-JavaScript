//Metodos Constructor Objetos en JavaScript

/*hemos creado objetos antes sin embargo si queremos utilizar reutilizar los atributos para crera un nuevo objeto no sera
posible */
/*Empezaremos a trabajar con constructores que nos permitan crear los atributos y metodos para crear mas objetos */

/*Un constructor es una función especial en JavaScript que se utiliza para crear e inicializar objetos cuando se emplea la sintaxis new. 
Los constructores permiten definir las propiedades y métodos que los objetos creados con ellos tendrán. */

//funcion constructor de obejtos de tipo persona
function Persona(nombre, apellido, email) {
  //la lista de parametros deben ser los atributos de nuestra clase
  //se recomienda que los metodos que van a ser constructores se escriban en mayusculas
  this.nombre = nombre; //de esta forma se asigna esta propiedad a nuestro objeto de tipo persona
  //el nombre del parametro es igual al nombre del atributo
  this.apellido = apellido;
  this.email = email;
}

//hemos definido ya una funcion constructor para el objetio de tipo persona

//creemos un obejto de tipo persona con el constructor ya creado
//new es una palabra reservada que cada ves que se usa crea un obejto en memoria
let padre = new Persona("juan", "perez", "jperez@.com"); //de esta forma creamos un instancia de un objeto usando el constructtor Persona
console.log(padre); //llamamos el objeto

//podemos crear mas pero con distintos valores ya que no se comparte entre si mas facil no?
let madre = new Persona("maria", "lopez", "ml@gmail.com");
console.log(madre);

//podemos cambiar un valor de un objeto asi
padre.nombre = "eddy";
console.log(padre);

//my practice --------------------------------------------------

function Telefonos(marca, modelo, color) {
  this.marca = marca;
  this.modelo = modelo;
  this.color = color;
}

let telefono1 = new Telefonos("samsung", "5d5e5", "black");
console.log(telefono1);

let telefono2 = new Telefonos("soni", "85ed85de", "red");
console.log(telefono2);

function Laptop(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
}

let laptop1 = new Laptop("lenovo", "15arh7");
console.log(laptop1);
//--------------------------------------------
