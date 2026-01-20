function add() {
    const a = Number(document.getElementById("input1").value);
    const b = Number(document.getElementById("input2").value);
    document.getElementById("resultDisplay").innerText = a + b;
}

function subtract() {
    const a = Number(document.getElementById("input1").value);
    const b = Number(document.getElementById("input2").value);
    document.getElementById("resultDisplay").innerText = a - b;
}

function multiply() {
    const a = Number(document.getElementById("input1").value);
    const b = Number(document.getElementById("input2").value);
    document.getElementById("resultDisplay").innerText = a * b;
}

function divide() {
    const a = Number(document.getElementById("input1").value);
    const b = Number(document.getElementById("input2").value);

    if (b === 0) {
        document.getElementById("resultDisplay").innerText = "Cannot divide by zero";
    } else {
        document.getElementById("resultDisplay").innerText = a / b;
    }
}

function clearCalc() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("resultDisplay").innerText = "Result will appear here";
}
