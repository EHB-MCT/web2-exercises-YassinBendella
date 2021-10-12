let list = [];

let pokemons = [];

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')

.then(resp => resp.json())

.then(data => {

list = data.results;

// LOOP OVER EVERY POKEMON

list.forEach(poke => {

fetch(poke.url)

.then(resp => resp.json())

.then(pokeObject => {

pokemons.push(pokeObject);



});

});



});



window.onload = function () {

setTimeout(buildList, 3000);



function buildList() {

console.log(pokemons);



}

}