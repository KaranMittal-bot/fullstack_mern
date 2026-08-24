async function getFact(i){
    try{
        let url = "https://catfact.ninja/fact";
        let res = await fetch(url);
        let data = await res.json();
        console.log(`Fact ${i+1} : ${data.fact}`);
    }catch(e){
        console.error("Error message : ",e);
    }
}

async function run(){
    for(let i=0;i<5;i++){
        await getFact(i);
    }
}

run();
console.log("Random 5 Facts about Cats");  