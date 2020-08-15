import {getResponseJson, images, generateCard} from './helper.js';


//---------------------------------------Card Generation----------------------------------------------------------------------
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



//-------------------------------------------------------------------------------------

const planetsurl = 'https://swapi.dev/api/planets';
const ul = document.getElementById('#planets');



 