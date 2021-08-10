function randomPokemon() {

    fetch('https://pokeapi.co/api/v2/pokemon', {
        method: "GET"
    })
        .then(result => result.json()).then(data => generatePokemon())
}

function generatePokemon() {

}


