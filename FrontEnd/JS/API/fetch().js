let url = "https://catfact.ninja/fact";

fetch(url)
    .then((res) =>{
        if (!res.ok){
            throw new error ("Request Rejected");
        }
        return res.json();
    })

    .then((data) =>{
        console.log(`fact : ${data.fact}`);
    })
    .catch((e) =>{
        console.error("error : ", e);
    })