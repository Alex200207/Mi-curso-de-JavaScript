/*Metodo Call en javaScript 

El metodo call permite llamar un metodo que esta definido en un objeto desde otro objeto*/

//creamos un objeto persona1 que contiene un metodo
let persona1 = {
  nombre: "eddy",
  apellido: "talavera",
  nombreCompleto: function (titulo, tel) {
    //agregando parametros
    return titulo + this.nombre + " " + this.apellido + tel; //al usar los parametros no se usa this
  },
};
console.log(persona1.nombreCompleto("ing ", " 88445304")); //damos argumentos a los parametros de la funcion dentro del metodo
let persona2 = {
  nombre: "carlos",
  apellido: "Talavera",
};

/*uso de call para usar el metodo nombreCompleto que pertenece a persona 1 con los datos de persona2
utilizando el objeto persona1 con la funcion nombreCompleto mandamos a llamar el metodo call este metodo resive un parametro
que es el objeto de donde se resiviran los parametros .

pasamos los parametro de persona 1 a persona 2 usando call de la forma que se ve */
console.log(persona1.nombreCompleto.call(persona2, "Ing", "2255665")); //de esta forma se manda llamar el metodo nombreCompleto de persona1 pero en los datos de persona2

//tambien podemos pasar argumentos con la funcion call.

//my practice-------------------------------------------

let auto1 = {
  marca: "toyota",
  color: "negro",
  datosCompletos: function (creador, placa) {
    //agregar parametros
    return (
      "creador :" +
      creador +
      this.marca +
      " , " +
      this.color +
      " , placa:" +
      placa
    );
  },
};

console.log(auto1.datosCompletos("eddy ", " 45d5e"));

let auto2 = {
  marca: "porshe",
  color: "rojo",
};

//pasar el metodo del auto1 al auto2 y usar los datos del auto2
result = auto1.datosCompletos.call(auto2, " eddy ", " 5595dd");
console.log(result);

let padre = {
  nombre: "wilmer",
  apellido: "talavera",
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};

let madre = {
  nombre: "mildred",
  apellido: "liseth",
  edad: 40,
};

//pasar metodo de padre a la madre

paso = padre.nombreCompleto.call(madre);
console.log(paso);

//-------------------------------------------------------------
