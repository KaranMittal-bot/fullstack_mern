let arr=[1,2,3,4,5];

function printVal(val){
    console.log(val);
}

arr.forEach(printVal);

//!----------------------------- OR


arr.forEach(function(val){
    console.log(val);
});

//!----------------------------- OR


arr.forEach( (val)=>{
    console.log(val);
});