let p = document.querySelector("p");

p.addEventListener("click" , () =>{
    console.log("Para was clicked");
})

let div = document.querySelector("div");

div.addEventListener("mouseenter" , () =>{
    console.log("mouse entered div area");
})

div.addEventListener("mouseleave", () => {
  console.log("mouse left div area");
});