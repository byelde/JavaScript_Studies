var date = new Date()
var hours = date.getHours()

console.log(`It´s ${hours}`)

if (hours > 6 && hours < 12) {
    console.log('Good morning.')
} else if ( hours < 18 ) {
    console.log('Good afternoon.')
} else {
    console.log('Good night.')
}