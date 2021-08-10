function randomPokemon() {

    for (let i = 0; i < Math.floor(Math.random()) * 6; i++) {

        let pokemon;

        switch (pokemon) {
            case 1:
                fetch('https://pokeapi.co/api/v2/pokemon/ditto')
                    .then(function (ditto) {
                        return ditto.text();
                    }).then(function (text) {
                    console.log("This should be ditto", text);
                }).catch(function (error) {
                    console.log('Request failed', error)
                });
                break;

            case 2:
                fetch('https://pokeapi.co/api/v2/pokemon/gengar')
                    .then(function (ditto) {
                        return ditto.text();
                    }).then(function (text) {
                    console.log("This should be Gengar", text);
                }).catch(function (error) {
                    console.log('Request failed', error)
                });
                break;

            case 3:
                fetch('https://pokeapi.co/api/v2/pokemon/charizard')
                    .then(function (ditto) {
                        return ditto.text();
                    }).then(function (text) {
                    console.log("This should be Charizard", text);
                }).catch(function (error) {
                    console.log('Request failed', error)
                });
                break;

            case 4:
                fetch('https://pokeapi.co/api/v2/pokemon/slowpoke')
                    .then(function (ditto) {
                        return ditto.text();
                    }).then(function (text) {
                    console.log("This should be Slowpoke", text);
                }).catch(function (error) {
                    console.log('Request failed', error)
                });
                break;

            case 5:
                fetch('https://pokeapi.co/api/v2/pokemon/machamp')
                    .then(function (ditto) {
                        return ditto.text();
                    }).then(function (text) {
                    console.log("This should be Machamp", text);
                }).catch(function (error) {
                    console.log('Request failed', error)
                });
                break;

            case 6:
                fetch('https://pokeapi.co/api/v2/pokemon/zubat')
                    .then(function (ditto) {
                        return ditto.text();
                    }).then(function (text) {
                    console.log("This should be Zubat", text);
                }).catch(function (error) {
                    console.log('Request failed', error)
                });

                break;
        }
    }
    return pokemon;
}



console.log(randomPokemon());

