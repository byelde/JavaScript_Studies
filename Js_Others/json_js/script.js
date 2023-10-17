function getCep() {
    const cep = document.querySelector('input.cep').value

    const requestCep = new XMLHttpRequest(); // class for requests
    requestCep.open('GET', `https://viacep.com.br/ws/${cep}/json/`) // define data origin
    requestCep.send() //send request

    requestCep.onload = function () {
                                                        //Text
        document.querySelector('div.output').innerHTML = this.responseText;

        let obj = JSON.parse(this.responseText)// Parse text into js object
        let district = obj.uf
        let city = obj.localidade
        let neighborhood = obj.bairro

        document.querySelector('div.output').innerHTML = `District: ${district} <br>City: ${city}<br>Neighborhood: ${neighborhood}`

        document.querySelector('div.alldata').innerHTML = JSON.stringify(obj) // Transform js object into text
    }

}