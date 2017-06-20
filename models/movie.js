const serviceMovies = require('../services/movies');

class Movie {
    constructor(data){
        console.log(data);
        this.id = data.id || 15,
        this.title = data.title,
        this.category = data.category,
        this.releaseYear = data.releaseYear,
        this.poster = data.poster,
        this.directors = data.directors,
        this.actors = data.actors,
        this.synopsis = data.synopsis,
        this.rate = data.rate,
        this.lastViewDate = data.lastViewDate,
        this.price = data.price
    }

    checkAllData(data){
       return Object.keys(this).filter(function(key){
            if(key !== 'id'){
                return data.hasOwnProperty(key)
            }
        });
    }

    createUser(){

    }


}

module.exports = Movie;