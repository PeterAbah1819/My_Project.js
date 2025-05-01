function performOperation() {
    // Get user input from input fields
    let num1 = document.getElementById('input1').value;  // Keep as string to handle character input
    let num2 = document.getElementById('input2').value;  // Keep as string to handle character input

    // Convert inputs to numbers only if they are numeric, otherwise handle as characters
    num1 = isNaN(num1) ? num1 : parseFloat(num1);
    num2 = isNaN(num2) ? num2 : parseFloat(num2);

    // Get selected operation
    let operation = document.getElementById('operation').value;

    // Check if inputs are valid
    if (isNaN(num1) && isNaN(num2)) {
        displayResult('Both inputs are invalid.');
        return;
    }

    // Perform the chosen operation
    let result;
    switch (operation) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            if (num2 === 0) {
                result = 'Cannot divide by zero';
            } else {
                result = divide(num1, num2);
            }
            break;
        default:
            result = 'Please choose a valid operation';
    }

    // Display the result
    displayResult(result);
}

function add(a, b) {
    debugger; // Pause execution here to debug the addition operation
    return a + b;
}

function multiply(a, b) {
    debugger; // Pause execution here to debug the multiplication operation
    return a * b;
}

function divide(a, b) {
    debugger; // Pause execution here to debug the division operation
    return a / b;
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}
