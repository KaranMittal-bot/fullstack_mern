const mongoose = require("mongoose");
const {Schema} = mongoose;


main().then( () => console.log("connection successful")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


const userSchema = new Schema({
    username : String,
    addresses : [
        {
            location : String,
            city : String,
        },
    ],
});

const user = mongoose.model("user", userSchema);


const addUsers = async() =>{
    let user1 = new user({
        username : "Sherlock Holmes",
        addresses :  [{
            location : "221B Baker Street",
            city : "New York City",
        }]
    });
    user1.addresses.push({location : "P32 Wall Street" , city : "Mountain View"});

    let result = await user1.save();
    console.log(result);
}

addUsers();