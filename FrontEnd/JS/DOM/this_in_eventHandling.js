let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");


btn.addEventListener("click", tapp);
p.addEventListener("click", tapp);
h1.addEventListener("click", tapp);
h3.addEventListener("click", tapp);


function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = ` rgb(${red} , ${green} , ${blue})`;
  return color;
}

function tapp() {
  console.log("clicked");
  this.style.backgroundColor = getRandomColor();
}