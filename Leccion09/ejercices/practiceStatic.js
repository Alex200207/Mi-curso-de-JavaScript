/*Ejercicio 1: Contador de Instancias
Crea una clase Contador con un método estático incrementarContador que incremente una propiedad e
stática contador cada vez que se cree una nueva instancia de la clase.
 También, añade un método estático obtenerContador que devuelva el valor actual del contador. */

 class Contador {
    static contador = 0;
  
    constructor() {
      Contador.incrementarContador();
    }
  
    static incrementarContador() {
      Contador.contador += 1;
    }
  
    static obtenerContador() {
      return Contador.contador;
    }
  }
  
  // Crea algunas instancias de Contador y verifica el contador
  let c1 = new Contador();
  let c2 = new Contador();
  let c3 = new Contador();
  
  console.log(Contador.obtenerContador()); // Debería imprimir 3
  