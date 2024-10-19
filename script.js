let firstNumber, 
    secondNumber, 
    operator = '';


function operate(number1, operator, number2) {
    number1 = Number(number1);
    number2 = Number(number2);

    switch (operator) {
        case '+':
            console.log(add(number1, number2));
            break;
        case '-':
            console.log(subtract(number1, number2));
            break;
        case '*':
            console.log(multiply(number1, number2));
            break;    
        case '/':
            console.log(divide(number1, number2));
            break; 
        default :
            console.log('no operator');                               
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b === 0) return "Error"
    return a / b;
}