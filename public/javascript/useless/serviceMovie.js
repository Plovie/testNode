/**
 * Created by nicolasplovie on 23/06/2017.
 */
function getMovieByIdFirebase (id){
    return new Promise((resolve, reject) => {
        firebase.database().ref('/movies/' + id).once('value').then(function (snapshot) {
            let movie = snapshot.val();
            console.log('firebase', movie);
            if (movie) {
                resolve(movie);
            } else {
                let error = " ------ Error Firebase ---------------  no movie for id: " + 20;
                reject(error)
            }
        });
    });
}

function getMovieByIdLocalhost(id){
    return new Promise((resolve, reject) => {
        fetch('http://localhost:3000/movies/' + id)
            .then(checkStatus)
            .then(parseJSON)
            .then(function (data) {
                console.log('request succeeded with JSON response', data);
                resolve(data);
            }).catch(err => {
            reject(err);
        });
    });
}

