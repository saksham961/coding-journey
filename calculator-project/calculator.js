// calculator

function calculate(x, y, operation) {
    if (operation == "+") {
        return x + y;
    }
    if (operation == "-") {
        return x - y;
    }
    if (operation == "*") {
        return x * y;
    }
    if (operation == "%") {
        return x % y;
    }
    if (operation == "**") {
        return x ** y;
    }
    return "Invalid operation. Use +, -, *, %, or **";
}

document.getElementById("runBtn").addEventListener("click", function () {
    let x = Number(prompt("Enter First number :"));
    let y = Number(prompt("Enter Second number :"));
    let operation = prompt("Enter operation :");

    let result = calculate(x, y, operation);

    document.getElementById("result").textContent = result;
});
