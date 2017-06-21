const serviceMovies = require('../services/movies');

class Movie {
    constructor(data = {}, id = ''){
        this.id = id || serviceMovies.getLastId() + 1;
        this.title = data.title || '',
        this.category = data.category || '',
        this.releaseYear = data.releaseYear || '',
        this.poster = data.poster || '',
        this.directors = data.directors || '',
        this.actors = data.actors || '',
        this.synopsis = data.synopsis || '',
        this.rate = data.rate || '',
        this.lastViewDate = data.lastViewDate || '',
        this.price = data.price || ''
    }

    checkAllKeys(data){
        let movieKeys = Object.keys(this);
        let movieKeysLength = movieKeys.length
       return JSON.stringify(Object.keys(data)) === JSON.stringify(movieKeys.slice(1,movieKeysLength+1));
    }

    checkNotEmpty(data){
        let tempArr = [];
        return data.forEach(function(key, value){
            if(!value){
                tempArr.push(key);
            }
        });
    }

    checkPresenceKey(data){
        let dataKey = Object.keys(data);
        let movieKey = Object.keys(this);
        return dataKey.filter(function(key){
            return !movieKey.includes(key);
        });
    }

    checkIdExists(){
        return serviceMovies.getOneById(this.id).length;
    }

    createUser(data){
        console.log(data);
        if(this.checkAllKeys(data)){
            serviceMovies.create(this);
            return true;
        }else{
            return false;
        }
    }

    updateMovie(data){
        if(this.checkIdExists() && !this.checkPresenceKey(data).length){
            return serviceMovies.update(this, data);
        }else{
            return false;
        }

    }

    deleteMovie(){
        if(this.checkIdExists()){
            serviceMovies.delete(this.id);
            return true;
        }else{
            return false;
        }

    }

    replaceMovie(data){
        if(this.checkAllKeys(data) && this.checkIdExists()){
            serviceMovies.replace(this);
            return true;
        }else{
            return false;
        }
    }




}

module.exports = Movie;