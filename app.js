function randomPokemon() {

}

for (let i = 0; i < Math.random() * 6; i++) {


    switch (randomPokemon()) {
        case 1:
            fetch('https://pokeapi.co/api/v2/pokemon/ditto')
                .then(function (ditto) {
                    return ditto.text();
                }).then(function (text) {
                console.log("This should be ditto", text);
            }).catch(function (error) {
                console.log('Request failed', error);
            });
            break;

        case 2:
            fetch('https://pokeapi.co/api/v2/pokemon/gengar')
                .then(function (gengar) {
                    return gengar.text();
                }).then(function (text) {
                console.log("This should be Gengar", text);
            }).catch(function (error) {
                console.log('Request failed', error);
            });
            break;

        case 3:
            fetch('https://pokeapi.co/api/v2/pokemon/charizard')
                .then(function (charizard) {
                    return charizard.text();
                }).then(function (text) {
                console.log("This should be Charizard", text);
            }).catch(function (error) {
                console.log('Request failed', error);
            });
            break;

        case 4:
            fetch('https://pokeapi.co/api/v2/pokemon/slowpoke')
                .then(function (slowpoke) {
                    return slowpoke.text();
                }).then(function (text) {
                console.log("This should be Slowpoke", text);
            }).catch(function (error) {
                console.log('Request failed', error);
            });
            break;

        case 5:
            fetch('https://pokeapi.co/api/v2/pokemon/machamp')
                .then(function (machamp) {
                    return machamp.text();
                }).then(function (text) {
                console.log("This should be Machamp", text);
            }).catch(function (error) {
                console.log('Request failed', error);
            });
            break;

        case 6:
            fetch('https://pokeapi.co/api/v2/pokemon/zubat')
                .then(function (zubat) {
                    return zubat.text();
                }).then(function (text) {
                console.log("This should be Zubat", text);
            }).catch(function (error) {
                console.log('Request failed', error);
            });

            break;

        default:
            console.log("No info on that pokemon");
            break;
    }
}

console.log(randomPokemon());
