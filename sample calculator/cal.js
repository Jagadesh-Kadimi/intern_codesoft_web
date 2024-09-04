// script.js
let currentInput = '';
let operation = null;
let firstNumber = null;

function updateDisplay() {
    document.getElementById('display').innerText = currentInput || '0';
}

function appendNumber(number) {
    if (currentInput.length < 10) { // Limit input length
        currentInput += number;
        updateDisplay();
    }
}

function setOperation(op) {
    if (currentInput === '') return;
    if (firstNumber !== null) {
        calculate();
    }
    firstNumber = parseFloat(currentInput);
    operation = op;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    operation = null;
    firstNumber = null;
    updateDisplay();
}

function calculate() {
    if (firstNumber === null || currentInput === '') return;
    let secondNumber = parseFloat(currentInput);
    switch (operation) {
        case '+':
            currentInput = (firstNumber + secondNumber).toString();
            break;
        case '-':
            currentInput = (firstNumber - secondNumber).toString();
            break;
        case '*':
            currentInput = (firstNumber * secondNumber).toString();
            break;
        case '/':
            currentInput = (firstNumber / secondNumber).toString();
            break;
    }
    operation = null;
    firstNumber = null;
    updateDisplay();
}
