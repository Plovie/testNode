const serviceMovie = require('../services/movies');
const Movie = require('../models/movie');
module.exports ={

    getAll(req, res){
        let allMovies = serviceMovie.getAll();
        res.status(200).send(allMovies);
    },

    getOne(req, res){
        let id = parseInt(req.params.id);
        let movie = serviceMovie.getOneById(id);
        if(movie){
            res.status(200).send(movie);
        }else{
            res.status(400).send('this movie doesn\'t exist');
        }

    },

    create(req, res){

        let data = req.body;
        let movie = new Movie(data);
        console.log(movie.checkAllData(data));
    }

}