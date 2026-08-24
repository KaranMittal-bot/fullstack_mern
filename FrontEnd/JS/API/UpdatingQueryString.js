let url = "http://universities.hipolabs.com/search?country=";
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("#res");
let p = document.querySelector("p");

btn.addEventListener("click" , async ()=>{
    Getcllg(inp.value);
})


async function Getcllg(country){
    try{
        let ans = url+country;
        let res = await fetch(ans);
        let data = await res.json();
        data.forEach(college =>{

            p.innerHTML = `College names for <b>${country}</b> : <br> <br>`;
            let li = document.createElement("li");
            li.innerText = college.name;
            ul.appendChild(li);
            console.log(college.name);
        });
    }catch(e){
        console.log(e);
    }
}