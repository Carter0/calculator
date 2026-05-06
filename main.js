/// Calculator Logic


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
    if (b === 0) {
        return "Cannot divide by 0";
    } else {
        return a / b;
    }
}

let operator = "";
let variable1 = "";
let variable2 = "";

function operate(operator, var1, var2) {
    const parsedVar1 = Number(var1);
    const parsedVar2 = Number(var2);

    if (Number.isNaN(parsedVar1) || Number.isNaN(parsedVar2)) {
        return "Invalid variables. Press Clear.";
    }

    switch (operator) {
        case "+":
            return add(parsedVar1, parsedVar2);
            break;
        case "-":
            return subtract(parsedVar1, parsedVar2);
            break;
        case "*":
            return multiply(parsedVar1, parsedVar2);
            break;
        case "/":
            return divide(parsedVar1, parsedVar2);
            break;
        default:
            return "Invalid operator. Press Clear.";
    }
}


/// Controller Code


const digits = document.querySelectorAll(".digits button");
const operators = document.querySelectorAll(".operators button");
const display = document.querySelector("#display");
const equalsButton = document.querySelector("#equalsButton");
const clearButton = document.querySelector("#clearButton");

let wasOperatorAssigned = false;
let wasVariable2Assigned = false;


digits.forEach((digit) => {
    digit.addEventListener("click", (event) => {
        const digitNumber = event.target.textContent;

        if (!wasOperatorAssigned) {
            variable1 += digitNumber;
            display.textContent = variable1;
        } else {
            variable2 += digitNumber;
            wasVariable2Assigned = true;
            display.textContent = `${variable1} ${operator} ${variable2}`;
        }
    });
});


operators.forEach((operatorButton) => {
    operatorButton.addEventListener("click", (event) => {
        const operatorType = event.target.textContent;

        if (!wasVariable2Assigned) {
            operator = operatorType;
            display.textContent = `${variable1} ${operator}`;
            wasOperatorAssigned = true;
        } else {
            const output = operate(operator, variable1, variable2);
            variable1 = output;
            operator = operatorType;
            display.textContent = `${variable1} ${operator}`;
            variable2 = "";
            wasOperatorAssigned = true;
        }
    });
});

equalsButton.addEventListener("click", (event) => {
    const output = operate(operator, variable1, variable2);
    display.textContent = output;
    variable1 = output;
    operator = "";
    variable2 = "";
    wasOperatorAssigned = false;
    wasVariable2Assigned = false;
});

clearButton.addEventListener("click", (event) => {
    display.textContent = "Enter a number followed by an operator then another number";
    variable1 = "";
    operator = "";
    variable2 = "";
    wasOperatorAssigned = false;
    wasVariable2Assigned = false;
});