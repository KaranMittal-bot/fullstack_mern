[1,2,3,4].some(
    (val)=>(
        val%2==0
    )
);

//* TRUE

[1,3].some(
    (val)=>(
        val%2==0
    )
);

//! FALSE