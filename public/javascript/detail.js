let nameUser, ageUser, id, deleteButton, updateButton;



window.onload = function(){
    let url_string = window.location.href
    let url = new URL(url_string);
    id = url.searchParams.get("id");
    console.log(id);
    nameUser = document.querySelector("#name");
    ageUser = document.querySelector("#age");
    deleteButton = document.querySelector("#delete");
    updateButton = document.querySelector("#update");
    getOne(id);
    http.onreadystatechange = function(event) {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200){
            let response = JSON.parse(event.target.response);
            console.log(ageUser);
            nameUser.innerHTML = response.movie.title;
            ageUser.innerHTML = response.movie.desc;
            deleteButton.addEventListener('click',function(){
                deleteUser(id);
            });
            updateButton.href = "/update.html?id="+id;
        }
    }
}


function deleteUser(id){
    deleteAction(id);
}
