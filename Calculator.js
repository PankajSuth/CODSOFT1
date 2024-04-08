let result = document.getElementById('result');

function appendToResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = '';
}

function calculateResult() {
    let expression = result.value;
    let operators = ['+', '-', '*', '/'];
    let currentNumber = '';
    let currentOperator = '';
    let total = 0;

    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];
        
        if (operators.includes(char)) {
            if (currentNumber !== '') {
                if (currentOperator === '') {
                    total = parseFloat(currentNumber);
                } else {
                    if (currentOperator === '+') {
                        total += parseFloat(currentNumber);
                    } else if (currentOperator === '-') {
                        total -= parseFloat(currentNumber);
                    } else if (currentOperator === '*') {
                        total *= parseFloat(currentNumber);
                    } else if (currentOperator === '/') {
                        total /= parseFloat(currentNumber);
                    }
                }
                currentNumber = '';
            }
            currentOperator = char;
        } else {
            currentNumber += char;
        }
    }

    if (currentNumber !== '') {
        if (currentOperator === '') {
            total = parseFloat(currentNumber);
        } else {
            if (currentOperator === '+') {
                total += parseFloat(currentNumber);
            } else if (currentOperator === '-') {
                total -= parseFloat(currentNumber);
            } else if (currentOperator === '*') {
                total *= parseFloat(currentNumber);
            } else if (currentOperator === '/') {
                total /= parseFloat(currentNumber);
            }
        }
    }

    result.value = total;
}
