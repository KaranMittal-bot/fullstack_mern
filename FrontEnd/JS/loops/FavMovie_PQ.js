let favMov = "Avatar";

let ans = prompt("Enter your guess (Write 'Quit' if you wanna leave): ");

while(ans!=favMov){
    if (
      ans == "Quit" ||
      ans == "quit" ||
      ans == "QUIT" ||
      ans == "qUIT" ||
      ans == "quIT" ||
      ans == "quiT" ||
      ans == "QUit" ||
      ans == "QUIt"
    ) {
      alert("You played Great!");
      console.log("PLayer Quitted");
      break;
    }
    console.log("WRONG GUESS");
    ans = prompt("Try guessing again (Write 'Quit' if you wanna leave) :");
}

alert("Correct Guess!");
console.log("Player guess it!");
