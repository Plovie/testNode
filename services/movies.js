const data = require('./data').data;

module.exports ={
    getAll(){
        return data;
    },

    create(movie){
        data.push(movie);
    },

    getLastId(){
        return data.reduce(function(prev, current){
            return (prev.id > current.id) ? prev.id : current.id
        });
    },

    getOneById(id){
      return data.filter(function(elem){
          return elem.id === id;
      })
    },

    update(movie, modifications){
        let modificationsKey = Object.keys(modifications);
        return data.filter(function(value){
            if(value.id === movie.id){
                modificationsKey.map(function(key){
                    value[key] = modifications[key];
                });
                return value;
            }
        });
    },

    delete(id){
      data.map(function(value, index){
        if(value.id === id){
            data.splice(index, 1);
        }
      });
    },

    replace(movie){
        data.map(function(value, index){
            if(value.id === movie.id){
                data.splice(index,1 );
                data.splice(index, 0, movie);
            }
        });
    }
}