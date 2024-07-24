//agregar y eliminar propiedades de un objeto

let person ={
    name:'Eddy',
    lastName:'Talavera',
    age:21,
    All:function(){
        return this.name + ' ' + this.lastName
    }
}

person.tel = '88445304';//agregar dinamicamente una propiedad a un objeto
person.tel = '8844dddd5304';//modifcar la propiedad agregada recientemente



console.log(person)

//eliminar una propiedad existente usando delete

delete person.tel;//usamos el obejto y su propiedad con la palabra reservada delete
console.log(person)