//metodo apply en javascript 
/*El método apply es una herramienta poderosa en JavaScript que permite invocar funciones con un contexto y argumentos específicos. 
Es especialmente útil para funciones que manejan un número variable de argumentos o cuando se necesita cambiar el contexto de this.
 Utilizar apply correctamente puede hacer tu código más flexible y reutilizable. */

 /*es muy similar al metodo call permite llamar un metodo que no esta definido en un objeto
 hay una diferencia y mas cuando se pasan parametros */

 let persona1 = {
    nombre: "eddy",
    apellido: "talavera",
    nombreCompleto: function (titulo,tel) {
        return titulo + ': ' + this.nombre + " " + this.apellido + ' tel '+  tel; 
    },
  };

  let persona2 = {
    nombre: "carlos",
    apellido: "Talavera",
  };
  
//uso de apply para poder llamar un metodo en un objeto que no lo tiene definido
console.log(persona1.nombreCompleto('ing','9956558'))

/*la diferencia entre call y apply esque pasamos lo valor del metodo dentro de un arreglo y asi no tenemos que pasarlos 
uno a uno separados por coma los valores del metodo eso lo haciamos con el metodo call 
*/
let array = ['ing','55526692']
  console.log(persona1.nombreCompleto.apply(persona2,array));//pasamos la variable array para pasar los valores del metodo
  //

//my practice--------------------------------

let padre = {
    nombre: "wilmer",
    apellido: "talavera",
    nombreCompleto1: function (tel,cargo,loq) {//pasar paremetros con un arreglo a madre
      return cargo + ': ' + this.nombre + " " + this.apellido + ' telefono: ' + tel + ' ' + loq;
    },
  };
  
  let madre = {
    nombre: "mildred",
    apellido: "liseth",
  };

array = ['supervisor', ' 22556688','dudud' ]
console.log(padre.nombreCompleto1.apply(madre,array))//recordar usar coma y no punto para pasar el arreglo 

let abuelo ={
    nombre:'samuel',
    apellido:'wilson'
}

arreglo = ['jefe','55484884','wtf']
console.log(padre.nombreCompleto1.apply(abuelo,arreglo))
//-------------------------------------------------------