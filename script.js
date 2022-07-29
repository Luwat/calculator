const chooseOperator  = (operator) => {
    if (currentOperandDisplay.innerText === '' ||
    currentOperandDisplay.innerText.includes(operator)){
            return
    }
    currentOperandDisplay.textContent += ` ${operator} `
    previousOperandDisplay.innerText = currentOperandDisplay.innerText;
    currentOperandDisplay.innerText = ''
};

const chooseNumber  = (number) => {
    if (currentOperandDisplay.innerText.indexOf(".") === -1)
    currentOperandDisplay.textContent += number
};

const del = () => {
    return currentOperandDisplay.innerText = currentOperandDisplay.innerText.slice(0,currentOperandDisplay.innerText.length -1);
}

const clear = () => {
    currentOperandDisplay.innerText = ''
    previousOperandDisplay.innerText = ''
}




const operate = (operator) => {
    operator = ['+', '-', '/', '*']
    const prev = parseFloat(previousOperandDisplay.innerText);
    const current = parseFloat(currentOperandDisplay.innerText);
    let computation
};


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
const previousOperandDisplay = document.querySelector('[data-previous-operand]')
const currentOperandDisplay = document.querySelector('[data-current-operand]')


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseNumber(button.innerText)
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperator(button.innerText);
    })
})

deleteButton.addEventListener('click', del)

clearButton.addEventListener('click', clear)

equalsButton.addEventListener('click', operate)