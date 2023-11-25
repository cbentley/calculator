let num1;
let num2;
let operator;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    let result;

    if (operator === '+') {
        result = add(num1, num2);
    } else if (operator === '-') {
        result = subtract(num1, num2);
    } else if (operator === '*') {
        result = multiply(num1, num2);
    } else if (operator === '/') {
        result = divide(num1, num2);
    }

    return result;
}

console.log(operate(3, 2, '+'));
console.log(operate(3, 2, '-'));
console.log(operate(3, 2, '*'));
console.log(operate(3, 2, '/'));