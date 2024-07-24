//acceder a las propiedades de los objetos


let persona ={
    nombre:'eddy',
    apellido:'Talavera',
    edad: 21,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido
    }

}

//forma basica de acceder a las propiedades del objeto
console.log(persona)
//podemos acceder como si fuera un arreglo
console.log(persona['nombre']);

//podemos recorrer todas la propiedades utilizando un ciclo for es especial porque cambia la sintaxy se llama for in
//for in

for(nombrePropiedad in persona ){// (in : dentro)
    console.log(nombrePropiedad)//accedemos a todos los nombres de las propiedades del obejto
    console.log(persona[nombrePropiedad])//accedemos a los valores de cada una de las propiedades del objeto
}
//de esta forma se accede con un ciclo for in


//my practice -------------------------------------------------

let auto ={
    marca:'volvo',
    placa:'dd5d5d',
    color:'red',
    completo:function(){
        return this.marca + ' ' + this.color
    }
}

for(nombrePropiedades in auto){
    console.log(nombrePropiedades)
    console.log(auto[nombrePropiedades])
}

  let laptop ={
    marca:"lenovo",
    modelo:'15arh7',
    color:'grey'
  }

  for(nameProps in laptop){
    console.log(nameProps)//mostrar keys
    console.log(laptop[nameProps])//mostrar valores
  }
  //-----------------------------------------------------------