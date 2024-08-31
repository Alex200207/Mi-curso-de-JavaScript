function sumar() {
    const forma = document.getElementById('forma');//obtenemos el formulario
    let operandoA = forma['operandoA'];//obtenemos el operando A del formulario con el metodo forma[] que devuelve un arreglo con los elementos del formulario
    let operandoB = forma['operandoB'];// obtenemos el operando B
    let resultado = Number(operandoA.value) + Number(operandoB.value);//sumamos los operandos
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;//
    if (isNaN(operandoA.value) || isNaN(operandoB.value)) {//si no es un numero
        document.getElementById('resultado').innerHTML = `Resultado: NO ES UN NUMERO`;//mostramos un mensaje
    }
}

const restar = () => {
    const forma = document.getElementById('forma');
    let n1 = forma['operandoA'];
    let n2 = forma['operandoB'];
    let resultado = Number(n1.value) - Number(n2.value);
    document.getElementById('resultado').innerHTML = `El resultado de la resta es: ${resultado}`;
}


const dividir = () => {
    let forma = document.getElementById('forma');
    let n1 = forma['operandoA'];
    let n2 = forma['operandoB'];

    let res = Number(n1.value) / Number(n2.value);
    document.getElementById('resultado').innerHTML = `El resultado de la division es: ${res}`;
}

const multiplicar = () => {
    let forma = document.getElementById('forma');
    let n1 = forma['operandoA'];
    let n2 = forma['operandoB'];
    let res = Number(n1.value) * Number(n2.value);

    document.getElementById('resultado').innerHTML = `El resultado de la multiplicacion es: ${res}`;
}

const modulo = () => {
    let forma = document.getElementById('forma');
    let n1 = forma['operandoA'];
    let n2 = forma['operandoB'];
    let res = Number(n1.value) % Number(n2.value);
    document.getElementById('resultado').innerHTML = `El resultado del modulo es: ${res}`;
    
}