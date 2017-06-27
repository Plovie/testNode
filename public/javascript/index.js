//
// function getMoviesFromDifferentDatabase(id1,id2) {
//
//     let p1 = getMovieByIdFirebase (id1);
//     let p2 = getMovieByIdLocalhost(id2)
//     getAllPromise(p1,p2);
//
// }
//
// getMoviesFromDifferentDatabase(1,50)
let favorites = [];
window.onload = function () {
    favorites = document.querySelectorAll(".fav");
    favorites.forEach((button)=>{
        button.addEventListener('click',function(event){
            event.preventDefault();
           addFavorites(button.id)
        });
    });
}