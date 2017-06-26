let nameUser, ageUser, id;



window.onload = function(){
    let url_string = window.location.href
    let url = new URL(url_string);
    id = url.searchParams.get("id");
    console.log(id);
   nameUser = document.querySelector("#name");
   ageUser = document.querySelector("#age");
   getOne(id)
  http.onreadystatechange = function(event) {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200){
        let response = JSON.parse(event.target.response);
            nameUser.value = response.movie.title;
            ageUser.value = response.movie.desc;

        }
    }
}

function updateUser(){
    let user ={
        name: nameUser.value,
        age: ageUser.value
    }
    if(user.name && user.age){
        replace(id, user);
    }else{
        update(id,user);
    }

}

