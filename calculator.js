let calculation = '';

function displayResult() {
    const resultElement = document.querySelector('.result');
    resultElement.textContent = calculation;
}

function updateCalculation(value) {
    calculation += value;
    displayResult();
}


function backspace() {
    calculation = calculation.slice(0, -1);
    displayResult();
}


function calculateResult() {
    try {
        calculation = eval(calculation);
    } catch (error) {
        calculation = 'Error';
    }
    displayResult();
}