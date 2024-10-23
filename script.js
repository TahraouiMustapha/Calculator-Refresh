const screen = document.querySelector('.screen');
let firstNumber, secondNumber, operator = '';
let displayValue = ''; 


//get all number buttons
const numberBtns = Array.from(
    document.querySelectorAll('.digit')
);
//get all operator buttons
const operators = Array.from(
    document.querySelectorAll('.operator')
);

//get the '.' button
const pointBtn = document.querySelector('.point');
pointBtn.addEventListener("click", () => {
    if( displayValue != '' && !displayValue.includes('.') ) {
        displayValue += '.';
        screen.innerHTML+='.';
    }
});

//add event listener to all number btns 
numberBtns.forEach(btn => 
    btn.addEventListener('click', e => 
        populateDisplay(e.target.textContent.trim())
    )
);

//add event listener to all operator btns 
operators.forEach( btn => {
    btn.addEventListener('click', e => {
        if(operator != '' && firstNumber ) {
            let result = operate(firstNumber, operator, displayValue);
            firstNumber = result.toString();
            screen.innerHTML = firstNumber;
        } else { firstNumber = displayValue; }
        displayValue = '';
        operator = e.target.textContent.trim();
    })
})

//add click event to equals btn
const equalsBtn = document.querySelector('.Equals');
equalsBtn.addEventListener('click', () => {
    if( operator != '' ){   
        secondNumber = displayValue;
        screen.innerHTML = '';
        let result = operate(firstNumber,operator,
                                secondNumber); 
        operator = '';                                
        screen.innerHTML = result;
        displayValue = result.toString();
        if(typeof result === 'string') startFresh(); 
    }
})

//add click event to clear btn
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    startFresh()
    screen.innerHTML = '';
} ); 

function startFresh() {
    firstNumber = undefined;
    secondNumber = undefined;
    operator = '';
    displayValue = '';
}

function populateDisplay(value) {
    if(displayValue == '') {
        screen.innerHTML = '';
    }
    screen.innerHTML += value;
    displayValue = screen.innerHTML;
}

function operate(number1, operator, number2) {
    number1 = Number(number1);
    number2 = Number(number2);

    switch (operator) {
        case '+':
            return add(number1, number2);
        case '-':
            return subtract(number1, number2);
        case '*':
            return multiply(number1, number2);
        case '/':
            return divide(number1, number2);
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
    if(b === 0) return "Error!"
    return Math.round(
        (a / b) * Math.pow(10, 7)) / Math.pow(10, 7) ;
}