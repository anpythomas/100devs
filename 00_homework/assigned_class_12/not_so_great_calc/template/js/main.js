let total = 0

document.querySelector('#zero').onclick = setToZero
document.querySelector('#addThree').onclick = addThree
document.querySelector('#addNine').onclick = addNine
document.querySelector('#subTwo').onclick = subTwo
document.querySelector('#addOneHundred').addEventListener('click', addOneHundred)

function setToZero() {
    total = 0
    document.querySelector('#resultTotal').innerHTML = `Result:  ${total}`;
}

function addThree() {
    total += 3
    document.querySelector('#resultTotal').innerText = `Result: ${total}`;
}

function addNine() {
    total += 9
    document.querySelector('#resultTotal').innerHTML = `Result: ${total}`;
}

function subTwo() {
    total -= 2
    document.querySelector('#resultTotal').innerHTML = `Result: ${total}`;
}

function addOneHundred() {
    total += 100
    document.querySelector('#resultTotal').innerText = `Result: ${total}`;
}