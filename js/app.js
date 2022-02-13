//separate function to generate pin
function getPin() {
    const pin = Math.round(Math.random() * 100000);;
    const pinString = pin + '';

    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

//function will be called here and pin will be showed
function generatePin() {
    const pin = getPin();

    document.getElementById('show-pin').value = pin;

}

//keypad handler added
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calc = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calc.value = '';

        }
    } else {
        const previousCalc = calc.value;
        const currentCalc = previousCalc + number;
        calc.value = currentCalc;
    }
})


// pin verify function
function verifyPin() {
    const pin = document.getElementById('show-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    if (pin == typedNumbers) {
        document.getElementById('success-msg').style.display = 'block';
        document.getElementById('fail-msg').style.display = 'none';
    } else {
        document.getElementById('success-msg').style.display = 'none';
        document.getElementById('fail-msg').style.display = 'block';
    }
}
