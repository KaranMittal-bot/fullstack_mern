let form = document.querySelector("form");

form.addEventListener("submit", function (event){
    event.preventDefault();
});

let user = document.querySelector("#user");

user.addEventListener("change",function(){
    console.log("Change occured");
});

user.addEventListener("input", function(){
    console.log(`Input happened : ${user.value}`);
});