//Metodos Get y set para las propiedades de una clase...

/*similar a cuando trabajamos con objetos podemos utilizar metodo set y get para trabajar con
los atributos de una clase ya sea para leer su valor o para modificarlos usando Get para leer y Set para modificarlos
 */

//dentro de una clase creamos metodos  ya no se utlizan comas
class Persona {
    //usamos un constructor que es parecido a un metodo
    constructor(nombre,apellido){//este es el primer metodo
        //crear propiedad y asignar el parametro
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){//usando metodo get de manera indirecta (segundo metodo)
        return this._nombre;
    }
    set changeNombre(nombre){//tercer metodo para modificar
        this._nombre = nombre
    }

}


let persona1 = new Persona('eddy','talavera') 
persona1.changeNombre = 'luis'//modificamos el atributo nombre por medio del metodo changeNombre creado en la clase Persona set nombre('luis)
//y que apunta a persona1
console.log(persona1.nombre)//get nombre

//de esta forma se pueden integrar get y set para los atributos de nuestra clase no es necesario 
//pero es una buena practica...

//------------------------------------------------------------------------------------