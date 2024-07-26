//Metodo set en JavaScript

//con esto podemos modificar los valores de los objetos

let person = {
  name: "Eddy",
  lastName: "Talavera",
  age: 21,
  idioma: "es", //recordar que los idiomas se almacenan en mayusculas pero para este ejemplo lo haremos asi
  get lang() {
    return this.idioma.toUpperCase(); //convertimos la cadena a mayuscula con el metodo toUpperCase
  },
  set lang(lang) {
    //usamos set para modifcar los valores de los atributos del objeto
    this.idioma = lang.toUpperCase(); //antes de asignar cualquier valor lo convertimos a mayuscula poesteriormente se asigna a la variable
    //garantizamos que la informacion ya esta validada
  },
  All: function () {
    return this.name + " " + this.lastName;
  },
};
console.log(person.lang); //mandamos a llamar el obejto con la propiedad
person.lang = "en"; //mandamos a llamar el metodo set usando la propiedad lang en el obejto person
//luego asignamos un nuevo valor
console.log(person.lang); //mandamos a mostrar la propiedad lang
console.log(person.idioma); //confirmamos que se cambio el valor en la vairable idioma

//my practice -----------------------------------

let auto = {
  marca: "toyota",
  color: "rojo",
  modelo: "6d62d",
  set colors(colors) {
    return (this.color = colors.toUpperCase());
  },
};

auto.colors = "blanco";
console.log(auto.color);

let telefono = {
  marca: "samsung",
  modelo: "d5e5d1de",
  color: "white",
  set colors(colors) {
    return (this.color = colors.toUpperCase());
  },
};

telefono.colors = "negro";
console.log(telefono.color);

let zapato = {
  color: "negro",
  talla: 9,
  precio: 22,
  marca: "land",
  set marcas(marcas) {
    return (this.marca = marcas.toUpperCase());
  },
};

zapato.marcas = "nike";
console.log(zapato.marca)

let laptop ={
    marca:'lenovo',
    modelo:'15arh7',
    color:'black',
    set changeColor(colors){
        this.color = colors.toUpperCase();
    }
}

laptop.changeColor = 'white'
console.log(laptop.color)


let casa ={
    color:'morado',
    lugar:'jalapa',
    set changePlace(lugar){
        this.lugar = lugar//hay que referenciar el obejto asi mismo 
    }
}

casa.changePlace ='ocotal'
console.log(casa.lugar)


let loquesea ={
    nombre:"wtf",
    set changeName(nombre){
        this.nombre = nombre
    }
}
loquesea.changeName = 'nbdh';
console.log(loquesea.nombre)


//---------------------------------------------
