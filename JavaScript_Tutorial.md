
## 1. Variables y Tipos de Datos

### Variables
JavaScript utiliza `var`, `let` y `const` para declarar variables:
- `var`: tiene un alcance global o de función.
- `let`: tiene un alcance de bloque.
- `const`: tiene un alcance de bloque y su valor no puede cambiar.

```javascript
var nombre = "Juan";
let edad = 30;
const pais = "España";
```

### Tipos de Datos
JavaScript es un lenguaje de tipado dinámico y soporta varios tipos de datos:
- `String`: cadena de texto.
- `Number`: números, tanto enteros como decimales.
- `Boolean`: verdadero o falso.
- `Object`: colección de pares clave-valor.
- `Array`: lista ordenada de valores.
- `Undefined`: variable declarada pero sin valor asignado.
- `Null`: valor intencionalmente vacío.

```javascript
let texto = "Hola";
let numero = 42;
let esVerdadero = true;
let objeto = { clave: "valor" };
let arreglo = [1, 2, 3];
let indefinido; // undefined
let nulo = null;
```

## 2. Operadores

### Aritméticos
Realizan operaciones matemáticas:
```javascript
let suma = 5 + 3;      // 8
let resta = 5 - 3;     // 2
let multiplicacion = 5 * 3; // 15
let division = 5 / 3;  // 1.6667
let modulo = 5 % 3;    // 2
```

### Asignación
Asignan valores a las variables:
```javascript
let x = 10;
x += 5; // x = x + 5
x -= 3; // x = x - 3
x *= 2; // x = x * 2
x /= 2; // x = x / 2
```

### Comparación
Comparan valores:
```javascript
5 == "5";  // true (igualdad débil)
5 === "5"; // false (igualdad estricta)
5 != "5";  // false (desigualdad débil)
5 !== "5"; // true (desigualdad estricta)
5 > 3;     // true
5 < 3;     // false
```

### Lógicos
Realizan operaciones lógicas:
```javascript
true && false; // false (y lógico)
true || false; // true (o lógico)
!true;         // false (negación lógica)
```

## 3. Estructuras de Control

### Condicionales
Ejecutan bloques de código basados en condiciones:
```javascript
let edad = 18;
if (edad >= 18) {
  console.log("Eres adulto");
} else {
  console.log("Eres menor de edad");
}
```

### Bucles
Repetición de bloques de código:

#### `for`
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

#### `while`
```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

#### `do...while`
```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

### Bucles de Array
#### `for...of`
```javascript
let numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
  console.log(numero);
}
```

#### `forEach`
```javascript
numeros.forEach(numero => console.log(numero));
```

## 4. Funciones

### Declaración de Funciones
```javascript
function saludar(nombre) {
  return `Hola, ${nombre}`;
}
console.log(saludar("Juan")); // Hola, Juan
```

### Funciones Anónimas y Flecha
```javascript
let sumar = function(a, b) {
  return a + b;
};

let restar = (a, b) => a - b;
console.log(sumar(5, 3)); // 8
console.log(restar(5, 3)); // 2
```

## 5. Arrays y Objetos

### Arrays
Colección ordenada de elementos:
```javascript
let frutas = ["manzana", "banana", "naranja"];
console.log(frutas[1]); // banana

frutas.push("uva"); // Añadir al final
frutas.pop();       // Eliminar del final
frutas.unshift("fresa"); // Añadir al inicio
frutas.shift();     // Eliminar del inicio
```

### Métodos de Array
```javascript
let numeros = [1, 2, 3, 4, 5];
let cuadrados = numeros.map(n => n * n); // [1, 4, 9, 16, 25]
let pares = numeros.filter(n => n % 2 === 0); // [2, 4]
let suma = numeros.reduce((acc, n) => acc + n, 0); // 15
```

### Objetos
Colección de pares clave-valor:
```javascript
let persona = {
  nombre: "Juan",
  edad: 30,
  saludar: function() {
    return `Hola, soy ${this.nombre}`;
  }
};
console.log(persona.nombre); // Juan
console.log(persona.saludar()); // Hola, soy Juan
```

## 6. Clases y Herencia

### Clases
Plantillas para crear objetos:
```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
}

let juan = new Persona("Juan", 30);
console.log(juan.saludar()); // Hola, soy Juan
```

### Herencia
Permite crear nuevas clases basadas en otras:
```javascript
class Estudiante extends Persona {
  constructor(nombre, edad, grado) {
    super(nombre, edad);
    this.grado = grado;
  }

  estudiar() {
    return `${this.nombre} está estudiando`;
  }
}

let maria = new Estudiante("María", 22, "Ingeniería");
console.log(maria.saludar()); // Hola, soy María
console.log(maria.estudiar()); // María está estudiando
```

## 7. Manejo de Errores

### Try/Catch
Captura y maneja errores en bloques de código:
```javascript
try {
  let resultado = 10 / 0;
  console.log(resultado);
} catch (error) {
  console.error("Ocurrió un error:", error);
} finally {
  console.log("Este bloque se ejecuta siempre");
}
```

## 8. Promesas y Async/Await

### Promesas
Manejan operaciones asíncronas:
```javascript
let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa cumplida");
  }, 2000);
});

promesa.then(resultado => console.log(resultado)); // Promesa cumplida
```

### Async/Await
Simplifican el manejo de promesas:
```javascript
async function obtenerDatos() {
  try {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
    let datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error("Error:", error);
  }
}
obtenerDatos();
```
