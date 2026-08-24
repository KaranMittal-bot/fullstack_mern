const express = require('express');
const app = express();
const port = 1000;

app.listen(port , () =>{
    console.log("app listening on port " + port);
});


app.get("/main" , (req,res) =>{
    res.send("Hello World");
    console.log("req listening")
});





