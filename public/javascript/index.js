
function parseJSON(response) {
    return response.json()
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
            return parseJSON(response).then(function (data) {
            let error = '------ Error Node --------------- ' + data.message;
            throw error
        });


    }
}


function getMoviesFromDifferentDatabase(id1,id2) {


    let p1 =  new Promise((resolve, reject) => {
            firebase.database().ref('/movies/' + id1).once('value').then(function (snapshot) {
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



    let p2 = fetch('http://localhost:3000/movies/' + id2)
        .then(checkStatus)
        .then(parseJSON)
        .then(function(data) {
            console.log('request succeeded with JSON response', data);
            return data;
        })



    Promise.all([p2,p1])
        .then(values => {
            console.log(values);
        })
        .catch(errors => {
            return console.log('request failed', errors)
        });
}

getMoviesFromDifferentDatabase(5,2)