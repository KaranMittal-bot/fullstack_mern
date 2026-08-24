let input = document.querySelector("input");

input.addEventListener("keydown" , function (){
    console.log("Key was pressed");
});


input.addEventListener("keyup", function () {
  console.log("Key was lifted");
});