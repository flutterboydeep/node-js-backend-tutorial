const express = require('express');
const app = express();
const mongoose = require('mongoose');

const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //


main().then((res) => { console.log("Mongodb connection successfully") }).catch((err) => console.log("mongo db conncetion error: ", err));

// app.get("/", (req, res) => {
//     res.send("Api working perfectly");
// });


// Schmea--------------------> one to very few here like use may 3,4 address only
const userSchema = new mongoose.Schema({
    username: String,
    address: [
        {
            _id: false,
            location: String,
            city: String,
        },

    ],
    orders:
        [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "order",
            }
        ]
});

const orderSchema = new mongoose.Schema({
    "order_name": String,
    "price": Number,

});

// model------------------->
const User = mongoose.model("User", userSchema);
const order = mongoose.model("Order", orderSchema);



const addOrder = async () => {
    const order1 = new order({
        "order_name": "Laptop",
        "price": 50000,

    });
    await order1.save();

}
addOrder();



const addUser = async () => {
    const user1 = new User({
        username: "deep",
        address: [
            {

                location: "Raniyala Dayalpur",
                city: "Saharanpur",
            },
        ],
        orders: [],

    });
    const myOrder = await order.findOne({ "price": 50000 });
    user1.orders.push(myOrder);
    await user1.save();

}
addUser();





app.listen(8080, () => {
    console.log("App is running port 8080");
});



async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/blogDb");
}