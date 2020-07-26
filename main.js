
import { planets } from './planets2.js'
console.log(planets)

function createNode (element) {
    return document.createElement(element);
}
function append(parent, el) {
    return parent.appendChild(el);
}
planets.map(planetname => {
    console.log(planetname.name)
})
planets.map(size => {
    console.log(size.diameter)
})


const planetsurl = 'https://swapi.dev/api/planets';
const ul = document.getElementById('#planets');


