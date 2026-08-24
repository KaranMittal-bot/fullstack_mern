function OddEvenTest(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }

    else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }

    else{
        console.log("Wrong request!");
    }
}


let checkOdd= OddEvenTest("odd");
let checkEven = OddEvenTest("even");