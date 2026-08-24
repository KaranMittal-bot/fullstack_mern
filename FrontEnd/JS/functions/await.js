let h1 = document.querySelector("h1");

function changeColor(color, delay) {

  let randNum = Math.floor(Math.random()*10)+1;

    return new Promise((resolve , reject) => {
      setTimeout(() => {

        if(randNum>3){
        reject("Promise rejected");
      }

        h1.style.color = color;

        resolve(color);
      }, delay);
    });
}

async function show(){
    try{
      await changeColor("red", 1000);
      console.log(`color changed`);
      await changeColor("yellow", 1000);
      console.log(`color changed`);
      await changeColor("green", 1000);
      console.log(`color changed`);
      await changeColor("blue", 1000);
      console.log(`color changed`);
      await changeColor("pink", 1000);
      console.log(`color changed`);
    }
    catch(err){
      console.log("error caught ", err);
    }

    console.log("5");
}

show();
console.log("4");