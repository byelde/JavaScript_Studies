const printMsg = (msg) => console.log('Clude de Regatas ' + msg)

const lengthMsg = (msg) => console.log(msg.length)

const createMsg = (callback, func) => { // Callback is afunctions used as a parameter to another function
    let text = 'Flamengo aka CRF'
    callback(text.toUpperCase())
    func(text)
}

createMsg(printMsg, lengthMsg) 