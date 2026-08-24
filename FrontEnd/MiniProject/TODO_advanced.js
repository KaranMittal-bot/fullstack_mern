let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

//! EVENT LISTENERS

btn.addEventListener("click", addTask);

inp.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    addTask();
  }
});

ul.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  }
});


//! FUNCTIONS

function addTask() {
    let value = inp.value.trim();
  if (value == "") {
    alert("Please Enter a Task First");
    inp.value="";
    return;
  }

  let li = document.createElement("li");
  ul.appendChild(li);
  li.append(value);
  inp.value="";

  let delbtn = document.createElement("button");
  delbtn.innerText = "delete";
  delbtn.classList.add("delete");
  li.appendChild(delbtn);
}