//practice --------------------------------------------Primera Forma

let auto ={
    marca:'toyota',
    placa:'5926dd',
    color:'blanco',
    autoColor: function(){
        return this.marca + " " + this.color
    }
}

console.log(auto.placa)
console.log(auto.marca)
console.log(auto.autoColor())//recordar usar como propiedad la fucnion y agregar los parentecis de esta

//-------------------------------------------------------------
let televisor ={
    marca1:'samsung',
    modelo:'ddr5155',
    size:'55 inches',
    DatosCompletos:function(){
        return 'su marca es: ' + this.marca1 + '  su modelo es: ' + this.modelo + ' y su tamano es de : ' + this.size
    }
}
console.log(televisor.DatosCompletos())

//-------------------------------------------------------------------------Segunda Forma

let auto2 = new Object()//creando un espacio vacio en memoria (refencia)

auto2.marca = 'porshe'
auto2.modelo = "52f2fff"
auto2.color = "negro"

auto2.DatosCompletos = function(){//creamos un metodo
    return this.marca + ' ' +this.color
}

console.log(auto2.marca)
console.log(auto2.color)
console.log(auto2.DatosCompletos())//llamando la propiedad con el metodo

let televisor2 = new Object()

televisor2.marca = "samsung"
televisor2.modelo  = "652d5e"
televisor2.ModeloCompleto = function(){
    return this.modelo + ' ' + this.marca
}

console.log(televisor2.ModeloCompleto())


//-------------------------------------------------------------------------------


