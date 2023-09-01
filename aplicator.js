const result = document.getElementById('result')
const inp1 = document.getElementById('input1')
const inp2 = document.getElementById('input2')
const subBtn = document.getElementById('submit')
const btnPlus = document.getElementById('plus')
const btnMinus = document.getElementById('minus')
let counter = '+'

btnPlus.onclick = function () {
    counter = '+'
}
btnMinus.onclick = function () {
    counter = '-'
}

function printResult(item) {
    if (item < 0) {
        result.style.color = 'red'
    } else {
        result.style.color = 'green'
    }
    result.textContent = item
}

function computeAction(input1, input2, actionSymbol) {
    const num1 = Number(input1.value)
    const num2 = Number(input2.value) 
    if (actionSymbol === '+') {
        return num1 + num2
    } else if (actionSymbol === '-') {
        return num1 - num2
    }
}

subBtn.onclick = function () {
    const resultAll =  computeAction(inp1, inp2, counter)
    printResult(resultAll)





    // if ( counter === '+') {
    //     const sum = Number(inp1.value) + Number(inp2.value)
    //     printResult(sum)
    // } else if ( counter === '-') {
    //     const sum = Number(inp1.value) - Number(inp2.value)
    //     printResult(sum)
    // }
}