let nums=[1,2,3,4,5,6,7,8,9,10];

console.log(nums.reduce((max, val) => {
    if(val>max){
        return val;
    }
    else{
        return max;
    }
}));

