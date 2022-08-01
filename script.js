const previousOperandDisplay = document.querySelector('[data-previous-operand]')
const currentOperandDisplay = document.querySelector('[data-current-operand]')
const buttons = document.querySelectorAll('button');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        let operation = button.classList.contains('operation')
        if (button.classList.contains('number')) {
            if (currentOperandDisplay.innerText.includes('.') &&
                    button.innerText === '.') {
                return
            }
            currentOperandDisplay.textContent += button.innerText;
        } else if (button.classList.contains('operation')){
            if (currentOperandDisplay.innerText.includes(operation)) {
                return
            }
            currentOperandDisplay.textContent += button.innerText;

        } else if (button.classList.contains('clear')) {
            currentOperandDisplay.textContent = '';
        } else if (button.classList.contains('delete')) {
            currentOperandDisplay.innerText = 
            currentOperandDisplay.innerText.slice(0, -1);
        } else if (button.classList.contains('equals') && button.innerText === '=') {
            currentOperandDisplay.textContent = eval(currentOperandDisplay.innerText)
        }
    })
})

const operate = (x, y, op) => {
    if (op === '+') {
        return x + y
    } else if (op === '-') {
        return x - y
    } else if (op === '*') {
        return x * y
    } else if (op === '÷') {
        return x / y
    } else {
        return
    }
}