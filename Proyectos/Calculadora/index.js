    // Variables para almacenar el resultado y el operador actual
    let currentInput = '0';//almacena el valor actual
    let operator = '';//almacena el operador
    let previousInput = '';//almacena el valor anterior

    // Función para actualizar el display
    function updateDisplay() {//actualiza el display
        document.getElementById('resultado').innerText = currentInput;
    }



    // Función para manejar los números
    function handleNumber(num) {
        if (currentInput === '0') {//si el valor actual es 0
            currentInput = num; // Reemplazar '0' por el nuevo número
        } else {//si no es 0
            currentInput += num; // Agregar el nuevo número al input actual
        }
        updateDisplay();
    }

    // Función para manejar los operadores
    function handleOperator(op) {//maneja los operadores
        if (previousInput !== '') {//si hay un valor previo
            calculate(); // Si hay un operador previo, calcula el resultado
        }
        operator = op;//almacena el operador
        previousInput = currentInput;//almacena el valor actual
        currentInput = '0'; // Reiniciar el input actual
    }

    // Función para realizar cálculos
    function calculate() {//realiza los calculos
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(current)) return;//si no es un numero

        switch (operator) {//segun el operador realiza la operacion
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }
        currentInput = String(result); // Convertir el resultado a string
        operator = '';//limpiar el operador
        previousInput = '';//limpiar el valor anterior
        updateDisplay();//actualizar el display
    }

    // Función para manejar el evento de clic
    function handleButtonClick(event) {
        const buttonValue = event.target.innerText;

        if (!isNaN(buttonValue)) {//si es un numero
            handleNumber(buttonValue);//maneja el numero
        } else if (buttonValue === '=') {//si es igual
            calculate();//realiza el calculo
        } else {
            handleOperator(buttonValue);//maneja el operador
        }
    }

    // Agregar eventos a los botones
    const buttons = document.querySelectorAll('.button');//obtenemos todos los botones
    buttons.forEach(button => {//recorremos los botones
        button.addEventListener('click', handleButtonClick);//agregamos el evento clic
    });


    // Función para limpiar la calculadora

    const clearButton = document.getElementById('clear');//obtenemos el boton clear
    clearButton.addEventListener('click', () => {//agregamos el evento clic
        currentInput = '0';//limpiamos el valor actual
        operator = '';//limpiamos el operador
        previousInput = '';//limpiamos el valor anterior
        updateDisplay();//actualizamos el display
    });

    // Inicializar el display
    updateDisplay();//actualizamos el display



