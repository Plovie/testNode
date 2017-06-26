import * as serviceMovie from './services/movies';
import * as helper from './helper';
import  { movieKeys } from './config';
import { Movie } from './models/Movie'

console.log(movieKeys instanceof Array);


function getAllMovies(req, res) {
    let allMovies: Movie[] = serviceMovie.getAll();
    return res.status(200).render("index",{allMovies: allMovies});
}

function getOneMovie(req, res) {
    let id = parseInt(req.params.id);
    let movie = serviceMovie.getOneById(id);
    if (movie.length === 1) {
        return res.status(200).send({movie: movie[0]});
    } else {
        return res.status(400).send({message: 'no movie for id: ' + id});
    }

}

function createMovie(req, res) {

    let data: any = req.body;
    data.id = serviceMovie.getLastId() + 1;

    if (helper.checkSameKeys(data, movieKeys)) {
        serviceMovie.create(data);
        return res.status(201).send(data);
    } else {
        return res.status(400).send('Movie doesn\'t have good properties : ' + JSON.stringify(movieKeys));
    }
}

function updateOneMovie(req, res) {
    let data = req.body;
    let id = parseInt(req.params.id);

    if (!serviceMovie.getOneById(id).length) {
        return res.status(400).send('no movie for id: ' + id);
    }

    if (!helper.checkKeysInArr(data, movieKeys)) {
        return res.status(400).send('Movie doesn\'t have good properties');
    } else {
        let movieUpdated = serviceMovie.update(id, data);
        return res.status(200).send(movieUpdated[0]);
    }

}


function deleteOneMovie(req, res) {
    let id = parseInt(req.params.id);

    if (!serviceMovie.getOneById(id).length) {
        return res.status(400).send('no movie for id: ' + id);
    } else {
        serviceMovie.delete(id);
        return res.status(200).send('movie deleted :' + id)
    }

}

function replaceOneMovie(req, res) {
    let data = req.body;
    let id = parseInt(req.params.id);

    if (!serviceMovie.getOneById(id).length) {
        return res.status(400).send('no movie for id: ' + id);
    }

    data.id = id;

    if (helper.checkSameKeys(data, movieKeys)) {
        serviceMovie.create(data);
        return res.status(201).send(data);
    } else {
        return res.status(400).send('Movie doesn\'t have good properties : ' + JSON.stringify(movieKeys));
    }
}


export {

    getAllMovies as getAll,
    getOneMovie as getOne,
    createMovie as create,
    updateOneMovie as update,
    deleteOneMovie as delete,
    replaceOneMovie as replace,

}