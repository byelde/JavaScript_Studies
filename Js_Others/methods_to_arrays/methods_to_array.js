const pessoa = ['Emy', '18', 'Estudante', 'Comprometida']

console.log(`Array: ${pessoa}`)
console.log()

console.log(`Join: ${pessoa.join(' - ')}`) // Unite elemets
console.log()

// pessoa.pop() // retire the last elemts
console.log(`Element retired by pop: ${pessoa.pop()}`) // show which element was retired
console.log(`Array after drop: ${pessoa}`)
console.log()

// pessoa.shift() // retire the first elemts
console.log(`Element retired by shift: ${pessoa.shift()}`)
console.log(`Array after shift: ${pessoa}`)
console.log()

pessoa.unshift('Emy') // add a element on the first position
console.log(`Array after unshift: ${pessoa}`)
console.log()

delete pessoa[1] // replace a element to undefined
console.log(`Array after delete: ${pessoa}`)
console.log()

pessoa.splice(1,1,'19') // add elements in the array
// array.splice(start_position, many_elements_will_be_deleted, elements_added)
console.log(`Array after splice: ${pessoa}`)
console.log()

const pessoa2 = ['Gabs', '18', 'Comprometido', 'Estudante']
const all_pessoas = pessoa.concat(pessoa2) // Concat arrays
console.log(`Concat arrays: ${all_pessoas}`)
console.log()

const flamengoPlayers = [
    'Santos',
    'Wesley',
    'Leo P.',
    'F.Bruno',
    'Ayrton Lucas',
    'E. Pulgar',
    'Gerson',
    'Everton R.',
    'Arrascaeta',
    'Bruno Henrique',
    'Gabi'
]
const favPlayers = flamengoPlayers.slice(7,10) // Slice arrays ( array.slice(initial_pos, final_pos) )
console.log(`Flamengo Team: ${flamengoPlayers.join(' - ')}`)
console.log(`Favorite Players (Sliced Array): ${favPlayers.join(' - ')}`)
console.log()

const sortPlayers = flamengoPlayers.sort() // Sort alphabetic array
console.log(`Sorted array: ${sortPlayers. join(' - ')}`)
console.log(`Reversed sorted array: ${sortPlayers.reverse().join(' - ')}`)
console.log()


const numbersList1 = [0,1,2,11,3,39,90,81,8]
console.log(`Numbers list: ${numbersList1}`)
                                                //a-b
const sortedNumbers = numbersList1.sort( (a,b) => a-b ) // specific method and fuction to sort numbers
console.log(`Sorted numbers list: ${sortedNumbers}`)

const numbersList2 = [0,1,2,11,3,39,90,81,8]            //b-a
const reversedSortedNumbers = numbersList2.sort( (a,b) => b-a ) // specific method and fuction to reverse numbers
console.log(`Reversed sorted numbers list: ${reversedSortedNumbers}`)

function higherNumber (array) {
    return Math.max.apply(null, array) //Get the higher number
}
console.log(`Higher number from array: ${higherNumber(numbersList1)}`)

function lowerNumber (array) {
    return Math.min.apply(null, array) //Get the lowher number
}
console.log(`Lower number from array: ${lowerNumber(numbersList1)}`)

const evenNumers = numbersList1.filter((value, index, array) => value % 2 === 0) //filter a array
// The method filter generate 3 parameters that are distributed between 3 variables
console.log(`Even numbers (filter):${evenNumers}`)