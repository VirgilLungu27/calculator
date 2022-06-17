const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete')
const showResult = document.querySelector('.result');
const currentOperand = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand');
const equalsKey = document.querySelector('.equals-key');

currentOperand.textContent = ' ';
previousOperand.textContent = ' ';

const add = function(a, b) {
    let sum = a + b;
    return sum;
}

const subtract = function(a, b) {
    let remainder = a - b;
    return remainder;
}

const multiply = function(a, b) {
    let multi = a * b;
    return multi;
}

const divide = function(a, b) {
    let quotient = a / b;
    return quotient;
}

function operateX
 (a, b, c) {
  let output = 0;

  try {

    switch(c) {
      case '+':
        output = a + b
        break;

      case '*':
        output = a * b
        break;

      case '-':
        output = a - b
        break;

     case '/': 
        if (b === 0) {
          throw "Can't divide by 0!"
        } else {
          output = a / b
        }
        break;
    }
  }
  catch(e) {
    console.log("There's an error: ", e)
  }

  return output;
}


let storedNumber = '';
let clickedOperator = ''
let firstNumber = '';
let result = '';
currentOperand.textContent = 0;

numberButton.forEach((number) => {
  number.addEventListener('click', function() {
    storedNumber += number.value;
    currentOperand.textContent = storedNumber;
  })
});

operatorButton.forEach((operator => {
  operator.addEventListener('click', function() {
    if (firstNumber && storedNumber) {
      displayResult();
    }
    // save the first number
    firstNumber = storedNumber;

    // get the operator that was clicked
    clickedOperator = operator.textContent;
    previousOperand.textContent = storedNumber + clickedOperator;
    storedNumber = '';

    console.log('FirstNumber' + firstNumber + 'Stored' + storedNumber)
    console.log(clickedOperator);

  })
}));

equalsKey.addEventListener('click', function() {
  displayResult();
});

function displayResult() {
  result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator)
  // update content of current operation with result and previous operand with the calculation, make storedNumber = result
  currentOperand.textContent = result;
  previousOperand.textContent = firstNumber + ' ' + clickedOperator + ' ' + storedNumber;
  storedNumber = result;
  console.log('FirstNumber' + firstNumber + 'Stored' + storedNumber);
}

