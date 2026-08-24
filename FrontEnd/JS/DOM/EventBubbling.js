let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

//! FUNCTION 

const clicked = function(event){
    event.stopPropagation();
    console.log("clicked ", event.currentTarget);
}

div.addEventListener("click", clicked);

ul.addEventListener("click", clicked);

for(li of lis){
    li.addEventListener("click",clicked);
}
