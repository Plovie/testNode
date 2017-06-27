"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serviceMovie = require("./services/movies");
const helper = require("./helper");
const config_1 = require("./config");
console.log(config_1.movieKeys instanceof Array);
function getAllMovies(req, res) {
    let allMovies = serviceMovie.getAll();
    return res.status(200).render("index", { allMovies: allMovies });
}
exports.getAll = getAllMovies;
function getOneMovie(req, res) {
    let id = parseInt(req.params.id);
    let movie = serviceMovie.getOneById(id);
    if (movie.length === 1) {
        console.log(movie);
        return res.status(200).send({ movie: movie[0] });
    }
    else {
        return res.status(400).send({ message: 'no movie for id: ' + id });
    }
}
exports.getOne = getOneMovie;
function createMovie(req, res) {
    let data = req.body;
    data.id = serviceMovie.getLastId() + 1;
    if (helper.checkSameKeys(data, config_1.movieKeys)) {
        serviceMovie.create(data);
        return res.status(201).send(data);
    }
    else {
        return res.status(400).send('Movie doesn\'t have good properties : ' + JSON.stringify(config_1.movieKeys));
    }
}
exports.create = createMovie;
function updateOneMovie(req, res) {
    let data = req.body;
    let id = parseInt(req.params.id);
    if (!serviceMovie.getOneById(id).length) {
        return res.status(400).send('no movie for id: ' + id);
    }
    if (!helper.checkKeysInArr(data, config_1.movieKeys)) {
        return res.status(400).send('Movie doesn\'t have good properties');
    }
    else {
        let movieUpdated = serviceMovie.update(id, data);
        return res.status(200).send(movieUpdated[0]);
    }
}
exports.update = updateOneMovie;
function deleteOneMovie(req, res) {
    let id = parseInt(req.params.id);
    if (!serviceMovie.getOneById(id).length) {
        return res.status(400).send('no movie for id: ' + id);
    }
    else {
        serviceMovie.delete(id);
        return res.status(200).send('movie deleted :' + id);
    }
}
exports.delete = deleteOneMovie;
function replaceOneMovie(req, res) {
    let data = req.body;
    let id = parseInt(req.params.id);
    if (!serviceMovie.getOneById(id).length) {
        return res.status(400).send('no movie for id: ' + id);
    }
    data.id = id;
    if (helper.checkSameKeys(data, config_1.movieKeys)) {
        serviceMovie.create(data);
        return res.status(201).send(data);
    }
    else {
        return res.status(400).send('Movie doesn\'t have good properties : ' + JSON.stringify(config_1.movieKeys));
    }
}
exports.replace = replaceOneMovie;
//# sourceMappingURL=movies.js.map