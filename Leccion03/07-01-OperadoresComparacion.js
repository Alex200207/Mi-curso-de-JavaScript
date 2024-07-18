//Operadores de Comparacion

let a = 3,
  b = 2,
  c = "3";

let z = a == c;
console.log(z); //se revisa el valor sin importar el tipo y convierte los valores de ser necesario

//operador de asignacion estricto
z = a === c; //revisa si los valores son iguales pero tambien los tipos
console.log(z);

//revisa si el valor es distinto
z = a != c; //revisa el valor sin importar el tipo
console.log(z);
z = a !== c; //revisa el valor pero tambien el tipo
console.log(z);

//my practice ------------------------------------------------------------------
let i = 8,
  j = "8";

let k = i == j;
console.log(k);

k = i === j;
console.log(k);

k = i != j;
console.log(k);

k = i !== j;
console.log(k);
//----------------------------------------------------------------------------
