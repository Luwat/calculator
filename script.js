const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;




const operate = () => {
    const num1 = parseInt(prompt('insert number', 0));
    const operator = prompt('insert operator',);
    const num2 = parseInt(prompt('insert number', 0));
    
    if(operator === '+') return add(num1, num2);
    if(operator === '-') return subtract(num1, num2);
    if(operator === '*') return multiply(num1, num2);
    if(operator === '/') return divide(num1, num2);
}

console.log(operate())
