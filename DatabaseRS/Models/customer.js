const mongoose = require("mongoose");
const {Schema} = mongoose;

main().then( () => console.log("connection successful"))
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


const orderSchema = new Schema({
    item : String,
    price : Number,
});



const CustomerSchema = new Schema({
    name : String,
    orders : [
        {
            type : Schema.Types.ObjectId,
            ref : "Order",
        },
    ],
});



// CustomerSchema.pre("findOneAndDelete" , async() =>{
//     console.log("Pre Middleware");
// });

CustomerSchema.post("findOneAndDelete" , async(customer) =>{
    if(customer.orders.length){
        let res = await Order.deleteMany({_id: {$in : customer.orders}});

        console.log(res);
    }
});



const Order = mongoose.model("Order" , orderSchema);
const Customer = mongoose.model("customer" , CustomerSchema);

const findCustomer = async()=>{
    let res = await Customer.find({}).populate("orders");
    console.log(res[0]);
};


const addCust = async () => {
    let newCust = new Customer({
        name : "Arjun",
    });

    let newOrder = new Order({
        item : "Coffee",
        price : 50
    });


    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();

    console.log("new Customer Added");
};


const delCust = async() =>{
    let data = await Customer.findByIdAndDelete("6a60a7fd7a2a20ba6d7f5acb");
    console.log("Customer deleted : " , data);
}

delCust();

// addCust();

// findCustomer();