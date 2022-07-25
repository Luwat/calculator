const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2 ;




const operate = (operator) => {
    if(operator === '+') return add(num1, num2);
    if(operator === '-') return subtract(num1, num2);
    if(operator === '*') return multiply(num1, num2);
    if(operator === '/') return divide(num1, num2);
};

const populate = () => {
    
};

// const appendNumber = (number) => {
//     currentOperand = number
//     previousOperand = currentOperand
// }
// const updateDisplay = () => {
//     currentOperandDisplay.textContent += currentOperand
//     previousOperandDisplay.textContent += previousOperand
// }

// const numberButtons = document.querySelectorAll('[data-number]');
// const operationButtons = document.querySelectorAll('[data-operation]');
// const clearButton = document.querySelector('[data-clear]');
// const deleteButton = document.querySelector('[data-delete]');
// const equalsButton = document.querySelector('[data-equals]');
// const previousOperandDisplay = document.querySelector('[data-previous-operand]')
// const currentOperandDisplay = document.querySelector('[data-current-operand]')


// numberButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         appendNumber(button.innerText)
//         updateDisplay()
//     })
// })

// operationButtons.forEach(button => {
//     button.addEventListener('click', () => {

//     })
// })