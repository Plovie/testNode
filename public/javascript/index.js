
function getMoviesFromDifferentDatabase(id1,id2) {

    let p1 = getMovieByIdFirebase (id1);
    let p2 = getMovieByIdLocalhost(id2)
    getAllPromise(p1,p2);

}

getMoviesFromDifferentDatabase(5,1)