//! FUNCTIONS
let onclickk = () => {
  alert("hello bkl");
  console.log("Button Clicked!");
};

let reached = () => {
  console.log("Mouse entered the area");
};

let left = () => {
  console.log("Mouse left");
};



//! CODE

let btns = document.querySelectorAll("button");

for (btn of btns) {
  btn.onmouseenter = reached;
  btn.onmouseleave = left;

  btn.addEventListener("click", () => {
    console.log("Button clicked");
    alert("You clicked");
  });

  btn.addEventListener("dblclick", () => {
    console.log("Button clicked twice");
  });
}
