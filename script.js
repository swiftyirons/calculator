let displayValue = 0;
let x = 0;
let y = 0;
let isOperator = false;
let operation = "none";

let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;
let divide = (x,y) => x  / y;

function operate(operator, x, y) {
  switch (operator) {
    case "+":
      solution = add(x, y);
      break;
    case "-":
      solution = subtract(x, y);
      break; 
    case "*":
      solution = multiply(x, y);
      break;
    case "/":
      solution = divide(x, y);
      break;
  }
  return solution;
} 

function processClick(button) {
  switch (button) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      if (x === 0 && !isOperator) {
        x = button;
      } else if (!isOperator) {
        x = x.toString() + button;
      } else if (y === 0 && isOperator) {
        y = button;
      } else {
        y = y.toString() + button;
      }
      console.log(x, y);
      break;
    case "add":
      operation = "+";
      if (isOperator) {
        x = operate(operation, +x, +y);
        y = 0;
        console.log(x, y);
        break;
      }
      isOperator = true;
      console.log(operation);
      break;
    case "subtract":
      operation = "-";
      if (isOperator) {
        x = operate(operation, +x, +y);
        y = 0;
        console.log(x, y);
        break;
      }  
      isOperator = true;
      console.log(operation);
      break;
    case "multiply":
      operation = "*";
      if (isOperator) {
        x = operate(operation, +x, +y);
        y = 0;
        console.log(x, y);
        break;
      }  
      isOperator = true;
      console.log(operation);
      break;
    case "divide":
      operation = "/";
      if (isOperator) {
        x = operate(operation, +x, +y);
        y = 0;
        console.log(x, y);
        break;
      }  
      isOperator = true;
      console.log(operation);
      break;
    case "equals":
      // catch error if operation not defined
      // catch error if divide by zero
      if (operation === "none") {
        // equals doesn't do anything
      }
      x = operate(operation, +x, +y);
      y = 0;
      console.log(x, y);
      break;
    case "clear":
      x = 0;
      y = 0;
      isOperator = false;
      console.log(x, y)
  }
}

 
const numberButtons = document.querySelectorAll('button');
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    processClick(button.id);
  });
});

