    // Variables para almacenar el resultado y el operador actual
    let currentInput = '0';
    let operator = '';
    let previousInput = '';

    // Función para actualizar el display
    function updateDisplay() {
        document.getElementById('resultado').innerText = currentInput;
    }



    // Función para manejar los números
    function handleNumber(num) {
        if (currentInput === '0') {
            currentInput = num; // Reemplazar '0' por el nuevo número
        } else {
            currentInput += num; // Agregar el nuevo número al input actual
        }
        updateDisplay();
    }

    // Función para manejar los operadores
    function handleOperator(op) {
        if (previousInput !== '') {
            calculate(); // Si hay un operador previo, calcula el resultado
        }
        operator = op;
        previousInput = currentInput;
        currentInput = '0'; // Reiniciar el input actual
    }

    // Función para realizar cálculos
    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(current)) return;

        switch (operator) {
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
        operator = '';
        previousInput = '';
        updateDisplay();
    }

    // Función para manejar el evento de clic
    function handleButtonClick(event) {
        const buttonValue = event.target.innerText;

        if (!isNaN(buttonValue)) {
            handleNumber(buttonValue);
        } else if (buttonValue === '=') {
            calculate();
        } else {
            handleOperator(buttonValue);
        }
    }

    // Agregar eventos a los botones
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });


    // Función para limpiar la calculadora

    const clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', () => {
        currentInput = '0';
        operator = '';
        previousInput = '';
        updateDisplay();
    });

    // Inicializar el display
    updateDisplay();



