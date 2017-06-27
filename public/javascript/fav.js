/**
 * Created by nicol on 27/06/2017.
 */
function getFavorites() {
    return getAll('favorites/')
        .then(moviesId => {
        let promiseArr = moviesId.map((val) => {
            return getOne(val)
        });
        return Promise.all(promiseArr)
    });
}

getFavorites()
    .then(values => {
        console.log(values);
    })
    .catch(err => {
        console.log(err);
    });