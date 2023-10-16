// Void Function

function sayHelloWorld () {
    console.log('Hello, World!!')
}

// Functions with parameter

function evenOrNot (number) {
    number % 2 == 0 ? console.log('Even') : console.log('Odd') 
}

// Functions with return
function factorial (number) {
    if (number < 0) {
        return 'invalid value'
    } else {
        if ((number == 0) || (number == 1)) {
            return 1
        } else {
            return number * factorial(number-1)
        }
    }
}

// Arrow function
// Modern way to create a function without write 'function'
const positivrOrNot = (num) => {
    if (num < 0) {
        return 'Negative'
    } else if (num > 0) {
        return 'Positive'
    } else {
        return 'Neutro'
    }
}

const double = (num) => num*2  // everything foward the arrow is the return 


sayHelloWorld()
evenOrNot(2)
console.log( factorial(5) )
console.log( positivrOrNot(-1) )
console.log( double(9) )