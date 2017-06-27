/**
 * Created by nicol on 27/06/2017.
 */

getOne(1).then(val => {
    console.log(val);
})

// getAll('/favorites').then(moviesId => {
//
//     let promiseArr = moviesId.map((val, id)=>{
//        return getOne(id)
//     })
//     console.log(promiseArr);
//     Promise.all(promiseArr)
//         .then(values =>{
//         console.log(values);
//     })
//         .catch((err)=>{
//             console.log(err);
//         })
// });
