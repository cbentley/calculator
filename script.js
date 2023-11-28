const calculator = document.getElementById('calculator');
const display = calculator.querySelector('.display');
const operandButtons = calculator.querySelectorAll('.operand');
const operatorButtons = calculator.querySelectorAll('.operator');
const equalsButton = calculator.querySelector('.equals');
const clearButton = calculator.querySelector('.clear');
const divideByZeroMessage = 'Nope :)';

let operand1 = '';
let operand2 = '';
let operator = null;

operandButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operand1 === divideByZeroMessage) {
            operand1 = button.textContent;
            display.textContent = operand1;
            return;
        }
        
        if (display.textContent.length > 11) {
            return;
        }

        if (operator === null) {
            operand1 += button.textContent;
            display.textContent = operand1;
        } else {
            operand2 += button.textContent;
            display.textContent = operand2;
        }
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operand1 !== divideByZeroMessage && operand1 !== '' && operand2 === '') {
            operator = button.value;
        } else if (operand1 !== divideByZeroMessage && operand1 !== '' && operand2 !== '') {
            [operand1, operand2, operator] = operate(operand1, operand2, operator);
            operator = button.value;
        }
    });
});

equalsButton.addEventListener('click', () => {
    if (operand1 !== divideByZeroMessage && operand1 !== '' && operand2 !== '') {
        [operand1, operand2, operator] = operate(operand1, operand2, operator);
    }
});

clearButton.addEventListener('click', () => {
    display.textContent = '0';
    operand1 = '';
    operand2 = '';
    operator = null;
});

function add(operand1, operand2) {
    return operand1 + operand2;
}

function subtract(operand1, operand2) {
    return operand1 - operand2;
}

function multiply(operand1, operand2) {
    return operand1 * operand2;
}

function divide(operand1, operand2) {
    if (operand2 === 0) {
        return divideByZeroMessage;
    }
    return operand1 / operand2;
}

function isFloat(number) {
    return !Number.isInteger(number) && Number.isFinite(number);
}

function roundToDecimalPlaces(number, decimalPlaces) {
    const roundedString = number.toFixed(decimalPlaces);
    const roundedNumber = parseFloat(roundedString); // or Number(roundedString)
    return roundedNumber;
}

function operate(operand1, operand2, operator) {
    console.log(operand1, operand2, operator);
    let result;
    operand1 = Number(operand1);
    operand2 = Number(operand2);

    if (operator === '+') {
        result = add(operand1, operand2);
    } else if (operator === '-') {
        result = subtract(operand1, operand2);
    } else if (operator === '*') {
        result = multiply(operand1, operand2);
    } else if (operator === '/') {
        result = divide(operand1, operand2);
    }

    if (isFloat(result)) {
        result = roundToDecimalPlaces(result, 3);
    }

    display.textContent = result.toString();
    operand1 = result.toString();
    operand2 = '';
    operator = null;

    return [operand1, operand2, operator]
}

// console.log(operate(3, 2, '+'));
// console.log(operate(3, 2, '−'));
// console.log(operate(3, 2, '×'));
// console.log(operate(3, 2, '÷'));