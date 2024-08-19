//ejercicios de programacion js

//contador de palabras de javascript

/*Descripción: Escribe una función que cuente el número de palabras en una cadena de texto.
Ejemplo: contarPalabras('Hola mundo, ¿cómo estás?') debería devolver 5. */

const contadorPalabras = (texto) => {

    const palabras = texto.trim().split(/\s+/)
    
    let palabrasNoVacias = palabras.filter(palabras => palabras.length > 0);

    return palabrasNoVacias.length
}

console.log(contadorPalabras('Hola alex como estas '))

//DATOS NUEVOS  

//expresión regular para dividir:  Usa la expresión regular \s+ para dividir el texto en palabras

/*texto.trim(): Elimina los espacios en blanco al principio y al final de la cadena. Esto es útil 
para evitar contar espacios adicionales al inicio o al final como palabras. */

/*texto.split(/\s+/): Divide la cadena en un array de palabras usando una expresión regular. \s+ 
coincide con uno o más espacios en blanco, lo que significa que cualquier cantidad de espacios entre 
palabras se tratará como un único separador. */

/*palabras.filter(palabra => palabra.length > 0): Filtra el array para eliminar elementos vacíos que
 podrían resultar de múltiples espacios consecutivos. */

//------------------------------------------------------------------------------------------------

/*Calculadora Básica:

Descripción: Crea una función que tome dos números y una operación (suma, resta, multiplicación, división) y devuelva el resultado.
Ejemplo: calculadora(5, 3, 'suma') debería devolver 8. */


const calculadora = (n1,n2,op) => {
    switch(op){
        case 'suma':
            return n1 + n2
        case 'resta':
            return n1 - n2
        case 'multi':
            return n1 * n2
        case 'div':
            if(n2 !== 0){
                return n1 / n2
            }else{
                console.log('error al dividir por 0')
            }

            default:
                return 'no existe esa opcion'
    }
}

console.log(calculadora())

//--------------------------------------------------------------------------------------------