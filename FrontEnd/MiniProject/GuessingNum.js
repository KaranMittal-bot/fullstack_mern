let max = prompt("Enter the maximum number: ");
console.log(`User's max number : ${max}`);


let random = Math.floor(Math.random()*max)+1;
console.log(`Random number : ${random}`);
let ans = prompt("Enter your guess🤔: ");
let count_try = 1;

while(ans != random){
    if(ans=="quit" || ans=="QUIT" || ans=="Quit"){
        Alert("Bruh, you gave already??");
        break;
    }
    count_try++;
    ans = prompt("OOPS! wrong guess 😬. Try again: ");
}

alert("GOOD JOB! , took you " +count_try + " tries ");
