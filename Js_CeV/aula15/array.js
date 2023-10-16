let num = [0, 1, 2, 3, 4, 5]

console.log(`${num}`)
// console.log(num)

num[6] = 6 // place on a specific posiion
// console.log(`${num}`)

num.push(0) // place on the last position
num.push(7) // place on the last position
// console.log(`Add a item: ${num}`)

console.log(`Number of items: ${num.length}`) // number of items

num.sort()
// console.log(`${num}`)

// for (var c = 0; c < num.length; c++) {
//     console.log(`Position ${c}: ${num[c]}`)
// }

for ( let c in num ) {
    console.log(`Position ${c}: ${num[c]}`)
}

console.log(num.indexOf(7))
console.log(num.indexOf(10)) // return -1 if there isn`t the value