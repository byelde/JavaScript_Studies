let numbersList = []

function add () {
    let list = document.querySelector('select.list')
    let number = Number(document.querySelector('input.number').value)

    if ( numbersList.indexOf(number) == -1 && (number <= 100 && number >= 0)) {

        numbersList.push(number)
        list.innerHTML += `<option>Value ${number} added</option>`

    } else {

        window.alert('Invalid value or already added')

    }
}

function greatestValue (list) {
    let greater = 0

    for (let c of list) {
        if (c > greater) {
            greater = c
        }
    }

    return greater
}


function lowerValue (list) {

    let lower = 100

    for (let c of list) {
        if (c < lower) {
            lower = c
        }
    }

    return lower

}


function sumValues (list) {
    let sum = 0
    for (let c of list) {
        sum += c
    }

    return sum
}


function meanValues (list) {
    let sum = 0
    for (let c of list) {
        sum += c
    }

    return sum/list.length
}


function finish () {
    let output = document.querySelector('div.output')
    output.innerHTML = ''

    if ( numbersList.length == 0 ) {
        window.alert('Please, add some values.')
    } else {
        greaterNumber = greatestValue(numbersList)
        lowerNumber = lowerValue(numbersList)
        sumNumbers = sumValues(numbersList)
        meanNumbers = meanValues(numbersList)

        output.innerHTML += `We have ${numbersList.length} values.<br>`
        output.innerHTML += `The greater value is ${greaterNumber}.<br>`
        output.innerHTML += `The lower value is ${lowerNumber}.<br>`
        output.innerHTML += `The sum of all value is ${sumNumbers}.<br>`
        output.innerHTML += `The mean of the values is ${meanNumbers}.<br>`
    }
}