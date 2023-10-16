function table() {
    
    var table = document.querySelector('select.multitable')
    table.innerHTML = ''
    var num = Number(document.querySelector('input.num').value)

    if (!(num == '') && !(isNaN(num))) {
    
        for (var c = 1; c != 11 ; c++ ) {
            table.innerHTML += `<option value="v${c}">${num} x ${c} = ${num*c}</option>`
        }
    } else {
        window.alert('Invalid value.')
    }
}