let cpfs = [
    '123.456.789-10',
    '321.864.131-23',
    '343234.412.89',
    '267.179-133.43',
    '28946236921',
    '123.653.856-a2',
    'a13.413-312-31b',
    '131.535.765-54',
    '893.757.2.21.232',
    '687.556.123-80',
    '687-556.123-80'
]
cpfs = cpfs.join(' ')
const conditionCpfs = /[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}/g
console.log(cpfs.match(conditionCpfs))



let text = 'A1BBBBB2Cccf3DEFcG4H+I5JKLM6cfNOP7Q!RST8UfVWXY9 Zabb0cffdef&cghijkl__mfnocpqrs=tfuvwxyz'

let conditionLetters = /[aeiou]/ig // get ALL (g) vowels independent of case (i)
console.log( text.match(conditionLetters) )

let conditionNumbers = /[0-3 | 7-9]/g // get some number
console.log( text.match(conditionNumbers) )

console.log( text.match(/\w/g) ) // get ALL (g) word characters
console.log( text.match(/\W/g) ) // get ALL (g) NON word characters
console.log( text.match(/\d/g)) // get ALL(g) Digit NUMBERS (\d)
console.log( text.match(/\s/g)) // get ALL(g) Space characters (\s)
console.log( text.match(/\bA/ig) ) // get a digit in the begging of the line (\b)
console.log( text.match(/\BA/ig) ) // get a digit NOT in the begging of the line (\B)
console.log( text.match(/b+/ig) ) // get sequences of characters (+) in the string
console.log ( text.match(/cf*/ig)) // get 'c's followed for by zero or more 'f's (*)
console.log ( text.match(/cf?/ig)) // get only 'cf' or 'c' appearances (?)
console.log ( text.match(/c(?= f)/ig)) // get 'c's followed by f (?=)
console.log ( text.match(/c(?! f)/ig)) // get 'c's not followed by f (?!)