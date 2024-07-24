//Metodo get y set en Obejtos de JavaScrip 
/* Son las mejores paracticas para acceder y modificar los valores delas propiedades de nuestro objeto
Get = Obtener . Permite acceder a los valores de las propiedades
Set = establecer o modifcar . Permite modifiacra los valores de los atributos de los obejtos
*/ 

let person ={
    name:'Eddy',
    lastName:'Talavera',
    age:21,
    get All(){//convertir a metodo (funcion) get
        return this.name + ' ' + this.lastName
    }
}



//forma basica 
console.log(person.All)//acceder al metodo

//my practice -------------------------------------


let car={
    color:'black',
    model:'5s65d1',
    marca:'toyota',
    get dates(){
        return this.color + ' ' + this.marca
    }
}

console.log(car.dates)

//------------------------------------------