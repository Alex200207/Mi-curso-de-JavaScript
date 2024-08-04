/*Ejercicio 1: Sobrescribir el método toString en varias clases
Crea una clase base Vehiculo con atributos como marca y modelo.
Sobrescribe el método toString en la clase Vehiculo para que devuelva una cadena con la marca y el modelo.
Crea una clase derivada Coche que extienda de Vehiculo y añada un atributo tipoCombustible.
Sobrescribe el método toString en la clase Coche para incluir el tipo de combustible. */

class Vehiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  date() {
    return this.marca + " " + this.modelo;
  }

  toString() {
    return this.date();
  }
  static corre(vehiculo){
    console.log('este vehiculo corre a 200km y su marca es: ' + vehiculo)
  }
}

class Coche extends Vehiculo {
  constructor(marca, modelo, tipoCombustible) {
    super(marca, modelo);
    this.tipoCombustible = tipoCombustible;
  }

  date() {
    return super.date() + " - Combustible: " + this.tipoCombustible;
  }
}

let vehiculo1 = new Vehiculo("toyota", "2024", "gasolina");
console.log(vehiculo1.toString());

let coche1 = new Coche("Land Cruiser", "2002", "diesel");
console.log(coche1.toString());

Vehiculo.corre(vehiculo1)


/*Ejercicio 2: Implementar polimorfismo con métodos comunes
Crea una clase base Animal con un método hacerSonido.
Crea dos clases derivadas Perro y Gato que extiendan de Animal.
Sobrescribe el método hacerSonido en ambas clases para que emitan sonidos específicos 
(ej. "Woof" para Perro y "Meow" para Gato).
Crea una función hacerSonidoAnimal que acepte un objeto Animal y llame al método hacerSonido. */

class Animal {
    hacerSonido() {
        return "Sonido genérico";
    }
}

class Perro extends Animal {
    hacerSonido() {
        return "Woof! Woof!";
    }
}

class Gato extends Animal {
    hacerSonido() {
        return "Meow! Meow!";
    }
}

class Pollo extends Animal{
    hacerSonido(){
        return 'Pio Pio'
    }
}

function hacerSonidoAnimal(animal) {
    return animal.hacerSonido();
}

let perro = new Perro();
let pollo = new Pollo();
let gato = new Gato();

console.log(hacerSonidoAnimal(perro)); 
console.log(hacerSonidoAnimal(gato));  
console.log(hacerSonidoAnimal(pollo))


/*El polimorfismo es un concepto en la programación que permite que una función o método haga cosas diferentes según
 el tipo de objeto que reciba.
 En otras palabras, el mismo método puede comportarse de manera distinta dependiendo del objeto que lo esté usando.

En mi ejemplo , el método hacerSonido se define en la clase base Animal y se sobrescribe en las clases 
derivadas Perro,Pollo y Gato. La función hacerSonidoAnimal toma un objeto animal como argumento y llama al método
 hacerSonido de ese objeto. Dependiendo de si el objeto es una instancia de Perro o Gato, se ejecutará el método 
 correspondiente. */