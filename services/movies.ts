import  { data } from './data';
import { Movie } from '../models/Movie'

function getAllMovies(){
    return data;
}

function createMovie(movie: Movie){
    data.push(movie);
}

function getLastIdMovies(): number{
    let lengthData: number = data.length - 1;
    return data[lengthData].id;
}

function getOneMovieById(id: number){
  return data.filter(function(elem){
      return elem.id === id;
  });
}

function updateOneMovie(id:number, modifications: any[]){
    let modificationsKey = Object.keys(modifications);
    return data.filter(function(value: Movie){
        if(value.id === id){
            modificationsKey.map(function(key: string){
                value[key] = modifications[key];

            });
            return true;
        }
        return false;
    });
}

function deleteOneMovie(id: number){
  data.map(function(value, index){
    if(value.id === id){
        data.splice(index, 1);
    }
  });
}

function replaceOneMovie(movie: Movie){
    data.map(function(value, index){
        if(value.id === movie.id){
            data.splice(index,1 );
            data.splice(index, 0, movie);
        }
    });
}

export {
    getAllMovies as getAll,
    getOneMovieById as getOneById,
    getLastIdMovies as getLastId,
    createMovie as create,
    updateOneMovie as update,
    deleteOneMovie as delete,
    replaceOneMovie as replace,
}