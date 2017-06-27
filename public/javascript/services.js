let http = new XMLHttpRequest();

function post(user){
    http.open("POST", 'http://localhost:3000/movies', true);

//Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/json");

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 201) {
            window.location = "http://localhost:3000/"
        }
    }
    http.send(JSON.stringify(user));
}


function deleteAction(id){
    http.open("DELETE", 'http://localhost:3000/movies/'+id, true);

//Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/json");

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            window.location = "http://localhost:3000/"
        }
    }
    http.send();
}

function getOne(id){
   return fetch('http://localhost:3000/movies/'+id)
           .then((value) =>{
               console.log(value);
               value.json()})
}

function update(id, user){
    http.open("PATCH", 'http://localhost:3000/movies/'+id, true);

//Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/json");

    http.onreadystatechange = function(event) {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200){
            window.location = "http://localhost:3000/detail.html?id="+id;
        }
    }
    http.send(JSON.stringify(user));
}

function replace(id, user){
    http.open("PATCH", 'http://localhost:3000/movies/'+id, true);

//Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/json");

    http.onreadystatechange = function(event) {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200){
            window.location = "http://localhost:3000/detail.html?id="+id;
        }
    }
    http.send(JSON.stringify(user));
}