//* Create a middleware for an API that checks if the access
//* token was passed in the query string or not

const ExpressError = require("./ExpressError")
const express = require("express");
const app = express();
const port = 1000;


function asyncWrap(fn) {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
}


app.listen(port , () =>{
    console.log("Listening on port : 1000");
});


//* Error Handling Middleware
app.get("/err" , (req, res) =>{
    abcd = abcd;
    return res.send("data bruh");
});;


app.use((err , req , res , next) =>{
    console.error("--------ERROR--------");
    throw new ExpressError(401 , "ACCESS DENIED");
}); 
