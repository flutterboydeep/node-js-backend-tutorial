const mongoose = require('mongoose');
main().then(() => console.log("mongo db connection successfull")).catch((err) => console.log("mongoes error", err));

const userschema = new mongoose.Schema({
    name: String,
    age: Number,
    discription: String,

});

const User = mongoose.model("User", userschema);
// getAllUsers();

// User.findById("69281c4bda84f01373bc577a").then((res) => { console.log("find 69281c4bda84f01373bc577a=  is =", res) }).catch((err) => { console.log("error filtering the data is ", err) });
// User.findByIdAndUpdate("69281c4bda84f01373bc577a", { name: 'deep dj' }).then((res) => { console.log("find and update 69281c4bda84f01373bc577a=  is =", res) }).catch((err) => { console.log("error filtering the data is ", err) }); // give old data when data has been updated
User.findByIdAndUpdate("69281c4bda84f01373bc577a", { name: 'deep panwar dj' }, { new: true }).then((res) => { console.log("find and update 69281c4bda84f01373bc577a=  is =", res) }).catch((err) => { console.log("error filtering the data is ", err) }); // give updated data  updated latest data who is after updated


console.log("user fetch successfully");


async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/userDB");
}

async function getAllUsers() {
    const data = await User.find();
    console.log("this is all users colllection data ", data);

}