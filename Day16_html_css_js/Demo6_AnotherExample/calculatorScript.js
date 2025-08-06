function calculate () {
    //Step 1: get the input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const errorElement = document.getElementById('error');
    const resultElement = document.getElementById('result');

    //Step 2: input validation
    if(isNaN(num1) || isNaN(num2)){
        errorElement.textContent = 'Please enter a valid Numbers!!';
        return;
    }

    // step3: Calculate logic
let result;
switch (operation) {
    case "add":
        result = num1 + num2;
        break;
    case "sub":
        result = num1 - num2;
        break;
    case "mul":
        result = num1 * num2;
        break;
    case "div":
        if (num2 === 0) {
            errorElement.textContent = "Division by zero is not allowed.";
            return;
        }
        result = num1 / num2;
        break;
    default:
        errorElement.textContent = "Unknown operation.";
        return;
}
    //Step 4: Display result
    resultElement.textContent=`Result: ${result}`;
}