let movieKeys = require('./config').movieKeys;

let data =   {
    id: 1,
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




// function checkKeysInObj(obj, arr) {
//     return new Promise((resolve,reject) =>{
//         let objKeys = Object.keys(obj);
//         function keysInObj(elem){
//             return objKeys.includes(elem);
//         }
//         if(arr.every(keysInObj))
//         {
//             resolve(true)
//         }else{
//             reject(false)
//         }
//     });
// }
//
//
//
// function checkKeysInArr(obj, arr) {
//     return new Promise((resolve,reject) =>{
//         let objKeys = Object.keys(obj);
//         function keysInArr(elem) {
//             return arr.includes(elem);
//         }
//         if(objKeys.every(keysInArr))
//         {
//             resolve(true)
//         }else{
//             reject(false)
//         }
//     });
// }
//
// function checkSameKeys(obj, arr) {
//     let p1 = checkKeysInArr(obj, arr);
//     let p2 = checkKeysInArr(obj, arr);
//     return Promise.all([p1, p2])
//         .then(values => {
//             return (values);
//         })
//         .catch(err => {
//             return err;
//         });
// }
//
// console.log(checkSameKeys(data,movieKeys));

var p = Promise.all([1,2,3]).then(
// this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
var p2 = Promise.all([1,2,3, Promise.resolve(444)]);
// this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
var p3 = Promise.all([1,2,3, Promise.reject(555)]);

// using setTimeout we can execute code after the stack is empty
setTimeout(function(){
    let test = p;
    console.log(test);
    console.log(p);
    console.log(p2);
    console.log(p3);
});