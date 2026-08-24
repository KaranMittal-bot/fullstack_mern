function MultipleGreet(func , n){
    for(let i=1;i<=n;i++){
        func();
    }
}

let greet= function(){
    console.log("Namaste!");
}

MultipleGreet(greet , 2);