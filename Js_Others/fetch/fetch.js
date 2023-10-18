const getCep = () => {
    let cep = document.querySelector('.cep').value

    let endpoint = `https://viacep.com.br/ws/${cep}/json/`

    fetch(endpoint, {method:'get'}) // send request to url
          //Promisse   //Treated Data
    .then(retorno => retorno.json()) // 1° then: get a promisse and treat data
    .then(dados =>{                 // 2° then: use data

        let distric = dados.uf
        let city = dados.localidade
        let neighborhood = dados.bairro

        let alldata = document.querySelector('.alldata')
        alldata.innerHTML = `Distric: ${distric}<br>City ${city}<br>Neighborhood: ${neighborhood}`
        console.log(dados)
    })
}