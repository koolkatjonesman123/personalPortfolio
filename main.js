//import {images} from './planetimages'

var images = [{
    "name": "Dantooine",
    "img": "Dantooine.jpeg"
}, {
    "name": "Alderaan",
    "img": "Alderaan.jpeg"
}]
/*fetchecs data endpoint and returns the body in json*/
async function getResponseJson(endpoint) {
    let response = await fetch(endpoint);

    let planets = await response.json();

    return planets

}
getResponseJson('https://swapi.dev/api/planets')
    .then(planets => {
        var cardsBox = document.getElementById("idCards")

        planets.results.map(planet => {
            var pp = document.createElement('div')
            pp.className = "pp"

            var cardContainer = document.createElement('div')
            cardContainer.className = "card"

            var cardFront = document.createElement('div')
            cardFront.className = "card__face card__face--front"

            var cardBack = document.createElement('div')
            cardBack.className = "card__face card__face--back"

            var nameTag = document.createElement('p')
            nameTag.innerText = "planet:" + planet.name
            // .appendChild(document.createTextNode(planet.name))


            cardFront.appendChild(createPTag("climate: ", planet.climate))

            var l = createPTag("Gravity: ", planet.gravity)
            cardFront.appendChild(l)

            var img = images.filter(function (el) {
                return el.name == planet.name
            })
            //return el.diameter > 20000
            if (img[0] != undefined) {
                var imgEL = document.createElement('img')
                imgEL.src = img[0].img
                cardBack.appendChild(imgEL)
                cardBack.appendChild(nameTag)

            } else { ///Default Image, Change if you wish
                var imgEL = docu0ment.createElement('img')
                imgEL.src = "Alderaan.jpeg"
                cardBack.appendChild(imgEL)
                cardBack.appendChild(nameTag)

            }

            cardContainer.appendChild(cardFront)
            cardContainer.appendChild(cardBack)
            pp.appendChild(cardContainer)
            cardsBox.appendChild(pp)
        })


        var card = document.querySelectorAll('.card');

        card.forEach(card => {
            card.addEventListener('click', function () {
                card.classList.toggle('is-flipped');
            });
        })

    })

const planetsurl = 'https://swapi.dev/api/planets';
const ul = document.getElementById('#planets');

function createPTag(text, value) {
    var tag = document.createElement('p')
    tag.innerText = text + value
    return tag

}

