
function addFavorites(id){
    return firebase.database().ref('favorites/' + id).set(true);
}

function getAll(url) {
        return firebase.database().ref(url).once('value').then(function(snapshot) {
            return Object.keys(snapshot.val());
        });
}
