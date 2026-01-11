
const mongoose = require('mongoose');
const userPosts = require('../models/posts_model');

const userSchema = new mongoose.Schema({
    name: {

        type: String,


    },
    email: String,
    address: [
        {
            _id: false,
            location: String,
            city: String,
        },
    ],
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
        }

    ]

});

userSchema.post("findOneAndDelete", async function (data) {

    console.log("delete middle ware is calling... ", data.ObjectId);
    await userPosts.deleteMany({ userId: data._id });

    // const user = );
    // delete related data here
    // next();
});
module.exports = mongoose.model("User", userSchema);
