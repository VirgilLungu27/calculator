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

function operate (a, b, c) {
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

