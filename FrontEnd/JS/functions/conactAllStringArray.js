function mergearrstr(arr){
    let sum="";
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

let arr=["hello","Karan"];

console.log(mergearrstr(arr));