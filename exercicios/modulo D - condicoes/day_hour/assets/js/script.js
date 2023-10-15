var hour = 12
        
var body = document.querySelector('body.body')
var card = document.querySelector('div.card')
var card_text = document.querySelector('p.text')
var card_image = document.querySelector('img.image_time')

if ( hour >= 6 && hour < 12 ) {

    // morning
    card_image.src = "./assets/img/day.jpg"
    card_text.innerText = 'morning'
    body.style.backgroundColor = 'rgba(248, 195, 175, 0.5)'

} else if (hour >= 12 && hour < 18) {

    // afternoon
    card_image.src = "./assets/img/afternoon.jpeg"
    card_text.innerText = 'Afternoon'
    body.style.backgroundColor = 'rgba(234, 154, 187, 0.5)'

} else {

    // night
    card_image.src = "./assets/img/night.jpeg"
    card_text.innerText = 'Night'
    body.style.backgroundColor = 'rgba(190, 138, 191, 0.5)'

}