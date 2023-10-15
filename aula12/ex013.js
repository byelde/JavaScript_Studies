var today = new Date()
var week_day = today.getDay() + 1

var year = today.getFullYear()
var month = today.getMonth()
var day = today.getDay()


console.log(`Today date: ${year}/${month}/${day+1}`)

switch (week_day) {
    case 1:
        console.log('Sunday')
        break
    
    case 2:
        console.log('Monday')
        break

    case 3:
        console.log('Tuesday')
        break

    case 4:
        console.log('Wednesday')
        break
    
    case 5:
        console.log('Thursday')
        break

    case 6:
        console.log('Friday')
        break
    
    case 7:
        console.log('Saturday')
        break

}