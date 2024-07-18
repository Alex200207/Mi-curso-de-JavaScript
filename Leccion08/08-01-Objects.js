//Objetos en javaScrip 
//un obejto puede contener propiedades y metodos

let persona = {
    nombre:'eddy',
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





