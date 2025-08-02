// Select the display element
const display = document.getElementById("display");

let currentInput = "";
let resultShown = false;

// Append numbers to display
function appendNumber(num) {
  if (resultShown) {
    currentInput = "";
    resultShown = false;
  }

  if (currentInput === "0") currentInput = "";
  currentInput += num;
  updateDisplay();
}

// Append operator to display
function appendOperator(operator) {
  if (currentInput === "") return;
  if (/[+\-*/]$/.test(currentInput)) {
    currentInput = currentInput.slice(0, -1);
  }
  currentInput += operator;
  updateDisplay();
}

// Append decimal point
function appendDot() {
  if (resultShown) {
    currentInput = "0";
    resultShown = false;
  }

  const parts = currentInput.split(/[\+\-\*\/]/);
  const lastPart = parts[parts.length - 1];
  if (!lastPart.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

// Clear entire input
function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

// Delete last character
function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

// Calculate the result
function calculateResult() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    resultShown = true;
    updateDisplay();
  } catch {
    currentInput = "Error";
    resultShown = true;
    updateDisplay();
  }
}

// Update the display with current input
function updateDisplay() {
  display.textContent = currentInput || "0";
}
