function count() {
    var divresult = document.querySelector('div.result')

    var start = Number(document.querySelector('input.start').value)
    var end = Number(document.querySelector('input.end').value)
    var step = Number(document.querySelector('input.step').value)
    
    // window.alert(`${start}, ${end}, ${step}`)

    divresult.innerHTML = ''

    if ( step != 0 && ((start > end && step < 0) || (end > start && step > 0)) ) {

        if (start > end) {

            for (var c = start; c >= end; c += step) {
                divresult.innerHTML += `${c}`
        
                if (c != end) {
                    divresult.innerHTML += `&#x1F449`
                }
            }

        } else {

            for (var c = start; c <= end; c += step) {
                divresult.innerHTML += `${c}`

                if (c != end) {
                    divresult.innerHTML += `&#x1F449`
                }
                
            }

        }

    } else {
        window.alert('Invalid values')
    }

}
