function add(x, y) {
 return x + y;
}

function subtract(x, y) {
 return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x,y) {
  return x  / y;
}

function operate(operator, a, b) {
  switch(operator) {
    case "+":
      solution = add(a, b);
      break;
    case "-":
      solution = subtract(a, b);
      break; 
    case "*":
      solution = multiply(a, b);
      break;
    case "/":
      solution = divide(a, b);
      break;
  }
  return solution;
}

// console.log(operate("+", 8, 4));