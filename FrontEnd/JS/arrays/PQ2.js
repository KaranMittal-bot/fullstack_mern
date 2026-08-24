let start=["january" , "july" , "march" , "august", 1];

console.log(`Current array : ${start}`);
start.shift();
start.shift();
start.unshift("june");
start.unshift("july");
console.log(`New array : ${start}`);
