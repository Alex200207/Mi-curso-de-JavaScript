
//creando clase Producto
class Producto{
//creando atributo statico
    static contadorProductos = 0;
    constructor(nombre,precio){
        this._idProducto = ++Producto.contadorProductos;//por cada objeto un id diferente
        this._nombre = nombre;
        this._precio = precio;
    }
//obteniendo id
    get idProducto(){
        return this._idProducto
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    get precio(){
        return this._precio
    }
    set precio(precio){
        return this._precio = precio
    }
    //sobreescribimos y usamos metodo toString
    toString(){
        return `idProducto: ${this._idProducto} ,nombre: ${this._nombre} ,precio: ${this._precio}`;
    }

}

//creamos la clase orden con una relacion de agregacion
class Orden{
    static contadorOrdenes = 0;//creamos un contador
    static get MAX_PRODUCTOS(){//simulamos una constante de tipo statico que retorne el 5
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;//
        this._productos = [];//creamos un atributos que es un arreglo vacio
        this._contadorProductosAgregados = 0;//crear variable contador productos agregados para saber cuantos productos agregados al arreglo
    }

    get idOrden(){
        return this._idOrden
    }

    agregarProducto(producto){
        if(this._productos.length < MAX_PRODUCTOS){
            this._productos.push(producto)
            //this._productos[this._contadorProductosAgregados++] = producto;
        }else{
            console.log('no se pueden agregar mas productos')
        }
    }
    calcularTotal(){//metodo calcular total
        let totalventa = 0;//creamos variable en 0

        /*creamos un ciclo for simplificado 
        esta sintaxis sirve para iterar un arreglo cuando se trabaja con arreglos en JavaScript
        sintaxis
        for(variable of arreglo){}*/
        for(let producto of this._productos){
            totalventa += producto.precio;/*accediendo al precio de cada uno de los valores que tiene nuestro arreglo
            utilizando la variable de totalVenta podremos incrementarla segun el precio del producto que tengamos
            por cada producto en nuestro arreglo la variable totalVenta ira haciendo la suma de cada uno de los precios de 
            cada producto en nuestro arreglo*/

            //totalVenta = totalVenta + producto.precio
        }
        return totalventa;
    }

    mostraOrden(){
        let productoOrden = '';
        for(let producto of this._productos){//iterar cada uno de los productos en nuestro arreglo
            productoOrden += producto.toString() + ' ';
        }

        console.log(`Orden: ${this.idOrden} Total: ${this.calcularTotal()}, productos: ${productoOrden}`)
    }

}



//creamos algunos objetos
let producto1 = new Producto('camisa',200)
let producto2 = new Producto('pantalon',200)

//imprimimos los objetos usando el metodo toString
console.log(producto1.toString())
console.log(producto2.toString())