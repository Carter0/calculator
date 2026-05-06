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
    // !Number return true if the var is an invalid number
    if (!Number(var1) || !Number(var2)) {
        return "Invalid variables";
    }


    switch (operator) {
        case "+":
            return add(var1, var2);
            break;
        case "-":
            return subtract(var1, var2);
            break;
        case "*":
            return multiply(var1, var2);
            break;
        case "/":
            return divide(var1, var2);
            break;
        default:
            return "Invalid operator";
    }
}


/// Controler Code


const digits = document.querySelectorAll(".digits button");
const display = document.querySelector("#display");


digits.forEach((digit) => {
    digit.addEventListener("click", (event) => {
        const digitNumber = event.target.textContent;
        variable1 += digitNumber;
        display.textContent = variable1;
    });
});