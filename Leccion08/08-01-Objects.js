//Objetos en javaScrip 
//un obejto puede contener propiedades y metodos

let persona = {//definir variable que tendra la referencia del obejto que se crea en memoria
    nombre:'eddy',//propiedad
    apellido:'Perez',
    email:'jperez@gmaol.coom',
    edad : 24,
    //agregar un metodo a un obejeto .
    nombreCompleto:function(){//similar a las funcion de tipo exprecion que es un objeto se le asigna la variable nombre completo
        //la cual es una propiedad mas de nuestro objeto
        return this.nombre + ' ' + this.apellido;//this es un operador y variable que apunta a ambos objetos y se usa para acceder
        //alas propiedades del obejto que estamos trabajando
    }
}
console.log(persona.nombre)
console.log(persona)
console.log(persona.nombreCompleto())//asi se llama la funcion con el nombre de nuestra propiedad y despues lo parentecis


//Mas temas de obejtos en javaScrip

//otra forma de definir un objeto

let persona2 = new Object();//de esta forma se puede crear un obejto nuevo en memoria usando  = palabra reservada (new) Obeject
/*al usar new Object le estamos indicando a js es que debe crear un nuevo objeto en memoria vacio no contiene ninguna propiedad ya despues
se le asignan propiedades al obejeto que se van definiendo dinamicamente */

persona2.nombre = 'carlos';//de esta forma se definen las propiedades
persona2.direccion = 'sector 3';
persona2.tel = '5885858';

console.log(persona2.nombre)// asi se accede a los obejtos



