function saveToDB(data){
    return new Promise((success, failure) => {
        let internetSpeed = Math.floor(Math.random()*10)+1;

        if(internetSpeed > 4){
            success("Success : Data is Saved");
        }else{
            failure("Failure : Data not Saved");
        }
    });
}

let request = (saveToDB("KARAN"));

request
    .then(() => {
        console.log("promise resolved");
        console.log(request);
    })

    .catch(() => {
        console.log("Promise rejected");
        console.log(request);
    })