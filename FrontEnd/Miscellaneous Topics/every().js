console.log(
    [1,2,3,4].every(
        (val) => 
            val%2==0
    )
);
//!FALSE
console.log(
    [2,4].every(
        (val) => 
            val%2==0
    )
);
//*TRUE