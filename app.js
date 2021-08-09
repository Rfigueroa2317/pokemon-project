fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(function (ditto){
    return ditto.text();
}).then(function (text){
    console.log("This should be ditto", text);
}).catch(function (error){
    console.log('Request failed', error)
});