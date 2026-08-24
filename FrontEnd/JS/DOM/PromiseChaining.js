function Request(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;

    if (internetSpeed > 4) {
      resolve(data);
    } else {
      reject("Network Error");
    }
  });
}

Request("Karan")
  .then((data) => {
    console.log("Network connectivity is good");
    return data;
  })
  .catch((err) => {
    console.log("Network Issue, Try again later");
  })
  .then((data) => {
    console.log(`'${data}' is Saved`);
  });


  


  
//! DIFFERENT CODE 


  let h1 = document.querySelector("h1");

  function changeColor(color, delay){
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        h1.style.color = color;
        resolve(color);
      }, 1000);
    })
  }


  changeColor("red", 1000)
    .then((color, delay) => {
      console.log(`color changed to ${color}`);
      return changeColor("yellow", 1000);
    })
    .then((color, delay) => {
      console.log(`color changed to ${color}`);
      return changeColor("green", 2000);
    })
    .then((color, delay) => {
      console.log(`color changed to ${color}`);
      return changeColor("blue", 3000);
    })
    .then((color, delay) => {
      console.log(`color changed to ${color}`);
      return changeColor("pink", 4000);
    })
    .then((color, delay) => {
      console.log(`color changed to ${color}`);
    })
    .catch((err) =>{
      console.log("unexpected err", err);
    })