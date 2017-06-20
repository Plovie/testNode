const data = require('./data').data;

module.exports ={
    getAll(){
        return data;
    },

    createMovie(data){
        data.push(data);
    },

    getLastId(){
        let max = 0;
        return data.filter(function(elem){
            return elem > max;
        });
    },

    getOneById(id){
      return data.filter(function(elem){
          return elem.id === id;
      })
    }
}