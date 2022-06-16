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

  function valueInput(n) {
        let store = '';
        store = store + n;
        if (n === "clear") {
                document.getElementById("display").textContent = 0;
            }
        else if (store === '') {
                document.getElementById("display").textContent = n;
            }
        else {
                document.getElementById("display").textContent = store;
        }
    return document.getElementById("display").textContent;
    };

