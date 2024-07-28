//Clases en JavaScript

/*A diferencia de los objetos un clase es una plantilla en la clase vamos a definir los
atributos y metodos que queremos que contengan nuestro objetos y apartir de esta clase o plantilla
vamos a poder crear instancias asi que un objeto es una instancia de una clase*/

/*Que contiene un clase ???
una clase va contener un nombre ,atributos y metodos son las caracteristicas basicas que debe tener
una clase con esto podemos crear ibjetis que tengan estas mismas caracteristicas sin embargo cada objeto tendra
sus propios valores*/

//sintaxis basica par definir una clase 
//utiliza la palabra reservada class

class Persona {
    //usamos un constructor que es parecido a un metodo
    constructor(nombre,apellido){
        //crear propiedad y asignar el parametro
        this.nombre = nombre
        this.apellido = apellido
    }
}

//crear objetos

let persona1 = new Persona('eddy','talavera')//de manera automatica se llama el constructor de clase y esta esperando argumentos 
//para este objeto
console.log(persona1)

//segundo objeto
let persona2 = new Persona('carlos','talavera')
console.log(persona2)

//------------------------------------------------------------------------------------