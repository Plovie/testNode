
function addFavorites(id){
    return firebase.database().ref('/favorites/' + id).set(true);
}

function getAll(url) {
    return new Promise((resolve, reject) => {
        firebase.database().ref(url).once('value').then(snapshot => {
            resolve(snapshot.val());
        });
    });
}
