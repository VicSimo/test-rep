let display = document.getElementById("display");
let currentInput = "";
let currentOperator = "";
let memory = null;

function appendToDisplay(value) {
    if (value === '.') {
        if (display.value.includes('.')) {
            return;
        }
    }

    if (display.value === "0" || currentOperator !== "") {
        display.value = value;
    } else {
        display.value += value;
    }
    currentInput = display.value;
}

function clearDisplay() {
    display.value = "0";
    currentInput = "";
    currentOperator = "";
    memory = null;
}

function backspace() {
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
        currentInput = display.value;
    }
}

function calculateResult() {
    if (currentOperator === "" || currentInput === "") {
        return;
    }
    const inputValue = parseFloat(currentInput);
    switch (currentOperator) {
        case "+":
            memory = (memory || 0) + inputValue;
            break;
        case "-":
            memory = (memory || 0) - inputValue;
            break;
        case "*":
            memory = (memory || 0) * inputValue;
            break;
        case "/":
            if (inputValue !== 0) {
                memory = (memory || 0) / inputValue;
            } else {
                alert("Cannot divide by zero");
            }
            break;
    }
    display.value = memory;
    currentInput = memory;
    currentOperator = "";
}


function toggleNegative() {
    if (display.value === "0") {
        display.value = "-0";;
    }
else {
    if (display.value.startsWith("-")) {
        display.value = display.value.slice(1);
    } else {
        display.value = "-" + display.value;
    }

    currentInput = display.value;
}

function addToMemory() {
    memory = parseFloat(display.value);
}

function recallMemory() {
    if (memory !== null) {
        display.value = memory;
        currentInput = display.value;
    }
}