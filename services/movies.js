"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
function getAllMovies() {
    return data_1.data;
}
exports.getAll = getAllMovies;
function createMovie(movie) {
    data_1.data.push(movie);
}
exports.create = createMovie;
function getLastIdMovies() {
    let lengthData = data_1.data.length - 1;
    return data_1.data[lengthData].id;
}
exports.getLastId = getLastIdMovies;
function getOneMovieById(id) {
    return data_1.data.filter(function (elem) {
        return elem.id === id;
    });
}
exports.getOneById = getOneMovieById;
function updateOneMovie(id, modifications) {
    let modificationsKey = Object.keys(modifications);
    return data_1.data.filter(function (value) {
        if (value.id === id) {
            modificationsKey.map(function (key) {
                value[key] = modifications[key];
            });
            return true;
        }
        return false;
    });
}
exports.update = updateOneMovie;
function deleteOneMovie(id) {
    data_1.data.map(function (value, index) {
        if (value.id === id) {
            data_1.data.splice(index, 1);
        }
    });
}
exports.delete = deleteOneMovie;
function replaceOneMovie(movie) {
    data_1.data.map(function (value, index) {
        if (value.id === movie.id) {
            data_1.data.splice(index, 1);
            data_1.data.splice(index, 0, movie);
        }
    });
}
exports.replace = replaceOneMovie;
//# sourceMappingURL=movies.js.map