var image = document.querySelector(".card-img-top");
var userName = document.querySelector(".card-title");
var userId = document.querySelector("#user-id");
var userEmail = document.querySelector("#email");
var userCity = document.querySelector("#city");
var btn = document.querySelector("button");

btn.addEventListener("click",function(){
    fetch("https://randomuser.me/api/")
    .then(function(response){
        if (response.ok == false){
            return error("JSON API request failed");            
        }
        return response.json();
    })
    .then(function(response){
        image.attributes.src.value = response.results[0].picture.large; 
        userName.innerHTML = response.results[0].name.first + " " +response.results[0].name.last;
        email.innerHTML = response.results[0].email;
        userCity.innerHTML = response.results[0].location.city;
        userId.innerHTML =  response.results[0].login.username;
    })
    .catch(function(error){
        console.log(error);
    })
});