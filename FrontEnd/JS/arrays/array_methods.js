let cars=["BMW","MERCEDIES","FERRARI"];

console.log(`Before push() : ${cars}`);
cars.push("TOYOTA");
//pushes new element to the end of array and returns the lenght of new array size
console.log(`After push() : ${cars}`);

console.log(`Before pop() : ${cars}`);
cars.pop();
//removes the last element in array and returns the elemennt
console.log(`After pop() : ${cars}`);

console.log(`Before unshift() : ${cars}`);
cars.unshift("RR");
//add the new element to start of array
console.log(`After unshift() : ${cars}`);

console.log(`Before shift() : ${cars}`);
cars.shift();
//removes the starting element in array and returns the element
console.log(`After shift() : ${cars}`);