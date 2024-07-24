//Distintas formas de imprimir un obejto en JavaScript
let person ={
    name:'Eddy',
    lastName:'Talavera',
    age:21,
    All:function(){
        return this.name + ' ' + this.lastName
    }
}
//concatenar cada valor de cada propiedad
console.log(person.name + ', ' + person.lastName)

//utilizando for in
for(nameProps in person){
    console.log(nameProps)
    console.log(person[nameProps])
}

//utilizando el metodo Objet.values() que regresa un arreglo con las propiedades de nuestro objeto
let personArray = Object.values(person);
console.log(personArray)


//podemos utilizar el metodo JSON.stringify () lo devuelve como un string
let personString = JSON.stringify(person)
console.log(personString)

