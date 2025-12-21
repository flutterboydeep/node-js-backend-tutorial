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


// Schmea-------------------->
const userSchema = new mongoose.Schema({
    username: String,
    address: [
        {
            location: String,
            city: String,
        },
    ],
});

// model------------------->
const User = mongoose.model("User", userSchema);
const addUser = async () => {
    const user1 = new User({
        username: "deep",
        address: [
            {
                location: "Raniyala Dayalpur",
                city: "Saharanpur",
            },
        ],
    });
    await user1.save();

}
addUser();





app.listen(8080, () => {
    console.log("App is running port 8080");
});



async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/blogDb");
}