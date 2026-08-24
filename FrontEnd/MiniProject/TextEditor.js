let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function(){
    p.innerHTML = this.value;
    console.log(this.value);
})