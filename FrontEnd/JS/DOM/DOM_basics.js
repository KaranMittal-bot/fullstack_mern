let main_img = document.getElementById("mainImg");
console.log("Main image obj(using getElementById): ");
console.dir(main_img);
console.log(" ");

let smallImages = document.getElementsByClassName("oldImg");
console.log("Old image obj (using getElementByClassName): ");
for (let i = 0; i < smallImages.length; i++) {
  console.dir(smallImages[i]);
}
console.log(" ");

let paragraph = document.getElementsByTagName("p");
console.log("Paragraph tag details(using getElementByTagName): ");
console.dir(paragraph);
console.log(" ");


//!     Query Selector

console.log("Using Query Selector: ");

console.log("   tag: ");
let h1tag = document.querySelector("h1");
console.dir(h1tag);
console.log(" ");

console.log("   id: ");
let id_desc = document.querySelector("#description");
console.dir(id_desc);
console.log(" ");

console.log("   class: ");
let class_images = document.querySelector(".images");
console.dir(class_images);
console.log(" ");

console.log("   selecting all <a> inside div: ");
let div_a = document.querySelectorAll("div a");
console.dir(div_a);
console.log(" ");

