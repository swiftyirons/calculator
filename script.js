let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;
let divide = (x,y) => x  / y;

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

// console.log(operate("*", 8, 4));