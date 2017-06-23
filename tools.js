let movieKeys = require('./config').movieKeys;

let data =   {
    toto: 1,
    title : "Avatar",
    category : 'sciencesfiction',
    releaseYear : "2010",
    poster : "server/img/avatar.jpg",
    directors : "James Cameron",
    actors : "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang, Michelle Rodriguez",
    synopsis : "Sur la lointaine planète de Pandora, Jake Sully, un hÃ©ros malgré lui, " +
    "se lance dans une quête de rédemption, de découverte, d'amour inattendu, dont l'issue sera un " +
    "combat héroïque pour sauver toute une civilisation.",
    rate : 3,
    lastViewDate : new Date(2013, 3, 1, 12, 4, 50),
    price : 25.46
};

function checkSameKeys(obj, arr){

    return checkKeysInObj(obj, arr) && checkKeysInArr(obj, arr);
}


function checkKeysInObj(obj, arr) {
    let objKeys = Object.keys(obj);

    function keysInObj(elem){
        return objKeys.includes(elem);
    }
    return arr.every(keysInObj);
}



function checkKeysInArr(obj, arr) {
    let objKeys = Object.keys(obj);

    function keysInArr(elem) {
        return arr.includes(elem);
    }
    return objKeys.every(keysInArr);
}

console.log(checkSameKeys(data,movieKeys));