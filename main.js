//import {images} from './planetimages'

var images = [{
    "name": "Dantooine",
    "img": "Dantooine.jpeg"
}, {
    "name": "Alderaan",
    "img": "Alderaan.jpeg"
}, {
    "name": "Yavin IV",
    "img": "Yavin4.png"
}]
/*fetchecs data endpoint and returns the body in json*/
async function getResponseJson(endpoint) {
    let response = await fetch(endpoint);

    let planets = await response.json();

    return planets

}

/**
 * Function: generateCard
 * Generates html cards
 * @param cardData Json array element, with planet info
 * 
 */
function generateCard(cardData) {
    //Parent Container for cards
    var pp = document.createElement('div')
    pp.className = "pp"

    var cardContainer = document.createElement('div')
    cardContainer.className = "card"

    //  cardContainer.append(generateCard(planet))

    // cardsBox.appendChild(cardContainer)
    var cardFront = document.createElement('div')
    cardFront.className = "card__face card__face--front"

    var cardBack = document.createElement('div')
    cardBack.className = "card__face card__face--back"

    var nameTag = document.createElement('p')
    nameTag.innerText = cardData.name
    // .appendChild(document.createTextNode(planet.name))


    cardBack.appendChild(createPTag("climate: ", cardData.climate))

    var l = createPTag("Gravity: ", cardData.gravity)
    cardBack.appendChild(l)

    var elDiam = createPTag("Diameter: ", cardData.diameter)
    cardBack.appendChild(elDiam)

    var img = images.filter(function (el) {
        return el.name == cardData.name
    })
    //return el.diameter > 20000
    if (img[0] != undefined) {
        var imgEL = document.createElement('img')
        imgEL.src = img[0].img
        cardFront.style.backgroundImage = `url(/${img[0].img})`
        cardFront.appendChild(nameTag)

    } else { ///Default Image, Change if you wish
        var imgEL = document.createElement('img')
        imgEL.src = "Alderaan.jpeg"
        //cardFront.appendChild(imgEL)
        cardFront.style.backgroundImage = "url(/Alderaan.jpeg)"
        cardFront.appendChild(nameTag)

    }

    cardContainer.appendChild(cardFront)
    cardContainer.appendChild(cardBack)
    pp.appendChild(cardContainer)
    return pp
}
for (var i = 1; i <= 3; i++) {

    getResponseJson(`https://swapi.dev/api/planets/?page=${i}`)
        .then(planets => {
            var cardsBox = document.getElementById("idCards")

            planets.results.map(planet => {


                cardsBox.appendChild(generateCard(planet))
            })


            var card = document.querySelectorAll('.card');

            card.forEach(card => {
                card.addEventListener('click', function () {
                    card.classList.toggle('is-flipped');
                });
            })

        })
}
const planetsurl = 'https://swapi.dev/api/planets';
const ul = document.getElementById('#planets');

function createPTag(text, value) {
    var tag = document.createElement('p')
    tag.innerText = text + value
    return tag

}

var planetForm = document.getElementById("planetForm")

function formFunction(event) {
    var cardsBox = document.getElementById("idCards")

    let formData = new FormData(planetForm)
    var ob = {
        "name": formData.get("name"),
        "climate": formData.get("climate") ,
        "diameter": formData.get("diameter") , 
        "gravity": formData.get("gravity")   

    };
     console.log(ob)
    //console.log(ob.name)
    
    
    //console.log(formData.getAll());

    cardsBox.append(generateCard(ob))
    var card = document.querySelectorAll('.card');

    card.forEach(card => {
        card.addEventListener('click', function () {
            card.classList.toggle('is-flipped');
        });
    })
    event.preventDefault();
}



planetForm.addEventListener('submit', formFunction)

