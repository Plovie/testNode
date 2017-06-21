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
        if(movie.createUser(data)){
            res.status(201).send();
        }else{
            res.status(400).send();
        }
    },

    update(req, res){
        let data = req.body;
        let id = parseInt(req.params.id);
        let movie = new Movie(data,id);
        let movieUpdated = movie.updateMovie(data);
        if(movieUpdated){
            res.status(200).send(movieUpdated)
        }else{
            res.status(400).send()
        }
    },

    delete(req,res){
        let id = parseInt(req.params.id);
        let movie = new Movie({}, id);
        let movieDeleted = movie.deleteMovie();
        if(movieDeleted){
            res.status(200).send()
        }else{
            res.status(400).send()
        }

    },

    replace(req, res){
        let data = req.body;
        let id = parseInt(req.params.id);
        let movie = new Movie(data,id);
        if(movie.replaceMovie(data)){
            res.status(200).send(movie)
        }else{
            res.status(400).send()
        }
    }

}