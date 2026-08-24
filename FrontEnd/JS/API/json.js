//! JSON to JS obj

let jsonRes ='{"fact":"The cat appears to be the only domestic companion animal not mentioned in the Bible.","length":84}';

let res = JSON.parse(jsonRes);

console.log("JSON to JS obj : ",res);


//! JS obj to JSON

let student = {
    name : "Karan",
    age : 20
};

JSON.stringify(student);

console.log("JS object to Json : ",JSON.stringify(student))