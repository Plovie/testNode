let nameUser, ageUser;

window.onload = function(){
    nameUser = document.querySelector("#name");
    ageUser = document.querySelector("#age");

};

function createUser()
{
    let user = {
        name: nameUser.value,
        age: ageUser.value
    };
    post(user);
    nameUser.value = '';
    ageUser.value = '';
}