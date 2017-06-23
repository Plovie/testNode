const data = require('./data').data;


function getAllMovies(){
    return data;
}

function createMovie(movie){
    data.push(movie);
}

function getLastIdMovies(){
    return data.reduce(function(prev, current){
        return (prev.id > current.id) ? prev.id : current.id
    });
}

function getOneMovieById(id){
  return data.filter(function(elem){
      return elem.id === id;
  });
}

function updateOneMovie(id, modifications){
    let modificationsKey = Object.keys(modifications);
    return data.filter(function(value){
        if(value.id === id){
            modificationsKey.map(function(key){
                value[key] = modifications[key];

            });
            return true;
        }
        return false;
    });
}

function deleteOneMovie(id){
  data.map(function(value, index){
    if(value.id === id){
        data.splice(index, 1);
    }
  });
}

function replaceOneMovie(movie){
    data.map(function(value, index){
        if(value.id === movie.id){
            data.splice(index,1 );
            data.splice(index, 0, movie);
        }
    });
}

module.exports = {

    getAll: getAllMovies,
    getOneById: getOneMovieById,
    getLastId: getLastIdMovies,
    create: createMovie,
    update: updateOneMovie,
    delete: deleteOneMovie,
    replace: replaceOneMovie
}