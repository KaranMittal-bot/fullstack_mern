let gameSeq=[];
let userSeq=[];
let btns = ["yellow", "red" , "green" , "blue"];

let start=false;
let level=0;

let h3 = document.querySelector("h3");
let Allbtns = document.querySelectorAll(".btn");
let body = document.querySelector("body");



//! LOGIC

for (let btn of Allbtns) {
  btn.addEventListener("click", btnPress);
}


document.addEventListener("keypress", function(){
    if(!start){
        resetGame();
        start = true;
        console.log("Game started!");
        levelUp();
    }
});


document.addEventListener("touchstart", function () {
  if (!start) {
    resetGame();
    start = true;
    console.log("Game started!");
    levelUp();
  }
});




//! FUNCTIONS


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 300);
}


function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 300);
}


function levelUp(){
    userSeq=[];
    level++;

    if (level > 10) {
      h3.innerText = "YOU WON! Press any key to Restart";
      
      start=false;
      return;
    }

    h3.innerText=`level ${level}`;

    let randIdx = Math.floor(Math.random()*btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`#${randColor}`);

    gameSeq.push(randColor);
    gameFlash(randBtn);
}



function checkseq(){
    let idx = userSeq.length-1;

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        lost();
    }
}


function resetGame() {
  start = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}


function btnPress(){
    if(!start){
        return;
    }
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");

    userSeq.push(userColor);

    checkseq();
}


function lost(){
    body.classList.add("lostColor");
    setTimeout(function () {
      body.classList.remove("lostColor");
    }, 300);
    h3.innerHTML = `GAME OVER! Your Score is :  <b>${level - 1}</b> <br> Press any key to start`;
    resetGame();
}