function verify() {
    var inputyear = document.querySelector('input.inputyear')
    var divresp = document.querySelector('div.resp')
    
    var currentyear = new Date().getFullYear()
    var yearofbirth = Number(inputyear.value)
    
    var age = currentyear - yearofbirth
    
    if (age < 0 || age > 120) {

        window.alert('Invalid values.')

    } else {

        var inputsex = document.getElementsByName('input_sex')
        if ( inputsex[0].checked ) {
            if (age >= 0 && age < 14) {
                divresp.innerHTML = `<img class = 'result' src="./assets/img/masc-child 1.png" alt="masc child">`
            } else if ( age >= 14 && age < 65 ) {
                divresp.innerHTML = `<img class = 'result' src="./assets/img/masc-adult 1.png" alt="masc teen">`
            } else {
                divresp.innerHTML = `<img class = 'result' src="./assets/img/masc-old 1.png" alt="masc old">`
            }
        } else {
            if (age >= 0 && age < 14) {
                divresp.innerHTML = `<img class = 'result' src="./assets/img/fem-child 1.png" alt="fem child">`
            } else if ( age >= 14 && age < 65 ) {
                divresp.innerHTML = `<img class = 'result' src="./assets/img/fem-adult 1.png" alt="fem teen">`
            } else {
                divresp.innerHTML = `<img class = 'result' src="./assets/img/fem-old 1.png" alt="fem old">`
            }
        }
        
    }

}