fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(function (ditto) {
    return ditto.text();
}).then(function (text) {
    console.log("This should be ditto", text);
}).catch(function (error) {
    console.log('Request failed', error)
});

fetch('https://pokeapi.co/api/v2/pokemon/gengar')
    .then(function (ditto) {
        return ditto.text();
    }).then(function (text) {
    console.log("This should be Gengar", text);
}).catch(function (error) {
    console.log('Request failed', error)
});

fetch('https://pokeapi.co/api/v2/pokemon/charizard')
    .then(function (ditto) {
        return ditto.text();
    }).then(function (text) {
    console.log("This should be Charizard", text);
}).catch(function (error) {
    console.log('Request failed', error)
});

fetch('https://pokeapi.co/api/v2/pokemon/slowpoke')
    .then(function (ditto) {
        return ditto.text();
    }).then(function (text) {
    console.log("This should be Slowpoke", text);
}).catch(function (error) {
    console.log('Request failed', error)
});

fetch('https://pokeapi.co/api/v2/pokemon/machamp')
    .then(function (ditto) {
        return ditto.text();
    }).then(function (text) {
    console.log("This should be Machamp", text);
}).catch(function (error) {
    console.log('Request failed', error)
});

fetch('https://pokeapi.co/api/v2/pokemon/zubat')
    .then(function (ditto) {
        return ditto.text();
    }).then(function (text) {
    console.log("This should be Zubat", text);
}).catch(function (error) {
    console.log('Request failed', error)
});