//* Create a middleware for an API that checks if the access
//* token was passed in the query string or not


const express = require("express");
const app = express();
const port = 1000;

app.listen(port , () =>{
    console.log("Listening on port : 1000");
});


//* middleware
app.use("/api" , (req, res ,next)=>{
    let {token} = req.query;
    
    if(token === "giveAccess"){
        return next();
    }

    res.send("Access denied boomer");
});


app.get("/api" , (req, res) =>{
     res.send("data");
});