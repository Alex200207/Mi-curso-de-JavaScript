//practice --------------------------------------------

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

//-------------------------------------------------------------------------


