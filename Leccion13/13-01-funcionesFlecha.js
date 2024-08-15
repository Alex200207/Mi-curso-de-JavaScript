//Funciones flecha en javaScript
//funciones normales
function miFuncion(){
    console.log('saludos desde mi funcion');
}


//las funciones flechas son funciones anonimas pxq no tienen nombre
//palabra reservada function no es necesaria
//uso del operador de flecha
//existen mas variantes
//no se aplica el concepto de hoisting cuando se usa la variable let 

const miFuncion2 = () => {
    console.log('mi funcion flecha')
}

miFuncion()
miFuncion2()