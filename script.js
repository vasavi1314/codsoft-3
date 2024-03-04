
let currentInput = '';

function addToDisplay(value) {
    currentInput += value;
    document.querySelector('.id').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.querySelector('.id').value = '0';
}

function calculate() {
    try {
        const result = eval(currentInput);
        document.querySelector('.id').value = result;
        currentInput = result.toString();
    } catch (error) {
        document.querySelector('.id').value = 'Error';
        currentInput = '';
    }
}
