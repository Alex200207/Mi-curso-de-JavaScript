/*Ejercicio 1: Crear una clase base y una clase derivada
Crear una clase base Persona:

La clase Persona debe tener un constructor que acepte nombre y edad.
Debe tener un método saludar que imprima Hola, mi nombre es <nombre> y tengo <edad> años.
Crear una clase derivada Empleado que herede de Persona:

La clase Empleado debe tener un constructor que acepte nombre, edad, y salario.
Debe tener un método mostrarSalario que imprima Mi salario es <salario>.
 */


class Persona{
    constructor(nombre,edad){
        this._nombre = nombre
        this._edad = edad 
    }
    saludar(saludo){
        saludo = 'hola mi nombre es ' + this._nombre  + ' y tengo ' + this._edad + ' años'
        return saludo
    }
}

class Empleado extends Persona{
    constructor(nombre,edad,salario){
        super(nombre,edad)
        this._salario =  salario
    }
    mostrarSalario(salario){
        return salario = 'Mi salario es: ' + this._salario
    }
}

empleado1 = new Empleado('eddy',20,555)

console.log(empleado1.saludar())
console.log(empleado1.mostrarSalario())
//-------------------------------------------------------------------------------------
/*Ejercicio 2: Sobrescribir métodos
Crear una clase Animal:

La clase Animal debe tener un constructor que acepte nombre.
Debe tener un método hacerSonido que imprima Este animal hace un sonido.
Crear una clase Perro que herede de Animal:

Debe sobrescribir el método hacerSonido para que imprima El perro ladra. */

//-----------------------------------------------------------------------------
/*Ejercicio 3: Añadir propiedades y métodos específicos
Crear una clase Vehiculo:

La clase Vehiculo debe tener un constructor que acepte marca y modelo.
Debe tener un método mostrarInfo que imprima Este vehículo es un <marca> <modelo>.
Crear una clase Coche que herede de Vehiculo:

Debe tener un constructor que acepte marca, modelo, y puertas.
Debe tener un método mostrarInfo que imprima Este coche es un <marca> <modelo> con <puertas> puertas. */