const result = document.querySelector('.result')
const buttons = document.querySelectorAll('.buttons button')

let currentNumber = ""
let firstOpe = null
let operador = null
let restart = false

function updateResultado(originClear = false) {
    result.innerText = originClear ? 0 : currentNumber.replace(".",",")
}

function addDigit(digit){
    if (digit == "," && (currentNumber.includes(",") || !currentNumber))
        return

    if (restart){
        currentNumber = digit
        restart = false
    }else{
        currentNumber += digit
    }

    updateResultado()
}

function setOperador(newOpe){
    if (currentNumber) {
        calculate()

        firstOpe = parseFloat(currentNumber.replace(",","."))
        currentNumber = ""
    }

    operador = newOpe
}

function calculate(){
    if (operador == null || firstOpe == null) return
    let seconOpe = parseFloat(currentNumber.replace(",","."))
    let valorFinal

    switch (operador) {
        case "+":
            valorFinal = firstOpe + seconOpe
            break;

        case "-":
            valorFinal = firstOpe - seconOpe
            break;

        case "x":
            valorFinal = firstOpe * seconOpe
            break;

        case "÷":
            valorFinal = firstOpe / seconOpe
            break;
        default:
            return;

    }

    if (valorFinal.toString().split(".")[1]?.length > 5) {
        currentNumber = parseFloat(valorFinal.toFixed(5)).toString()
    }else{
        currentNumber = valorFinal.toString()
    }

    operador = null
    firstOpe = null
    restart = true
    updateResultado()
}

function clearCalculator() {
    currentNumber = ""
    firstOpe = null
    operador = null
    updateResultado(true)
}

function setPercentage(){
    let porcentagem = parseFloat(currentNumber) / 100;
    if (["+", "-"].includes(operador)) {
        porcentagem = porcentagem.toFixed(5)
    }
    currentNumber = pocentagem.toString()
    updateResultado()
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const textoBotao = button.innerText;
        if (/^[0-9,]+$/.test(textoBotao)) {
            addDigit(textoBotao);
        }else if(["+","-","x", "÷"].includes(textoBotao)){
            setOperador(textoBotao)
        }else if(textoBotao == "="){
            calculate()
        }else if (textoBotao == "C"){
            clearCalculator();
        }else if (textoBotao == "±"){
            currentNumber = (
                parseFloat((currentNumber || firstOpe).toString().replace(",",".")) * -1
            ).toString()
            updateResultado()
        }else if (textoBotao == "%"){
            setPercentage()
        }
    })
})