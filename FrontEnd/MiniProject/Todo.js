let todo=[];

let req = prompt("Please Enter your request: ");

while(true){
    if(req=="quit"){
        console.log("Quiiting..");
        break;
    }

    if(req=="list"){
        console.log("-----------------");
        for(let i =0;i<todo.length;i++){
            console.log(todo[i]);
        }
        console.log("-----------------");
    }
    
    else if(req=="add"){
        let task = prompt("PLease enter your tasks: ");
        todo.push(task);
        console.log(`Task '${task}' is added into the list`);
    }
    
    else if(req=="delete"){
        let remove = prompt("Please enter the task you want to remove :");
        let found=false;
        for(let i=0;i<todo.length;i++){
            if(remove==todo[i]){
                todo.splice(i, 1);
                alert(`task '${remove}' deleted`);
                console.log(`Task ${remove} deleted from list`);
                found=true;
                break;
            }
        }
        if(!found){
          alert("Invalid input! , No such tasks exists");  
        }
    }

    else{
        alert("Invalid input!");
    }

    req = prompt("Please Enter your request: ");
}