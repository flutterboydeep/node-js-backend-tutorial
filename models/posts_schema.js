
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 25,
    },
    body: {
        type: String,
        default: "N/A",
        maxLength: 100,
    },
    age: {
        type: Number,
        required: true,
        max: 200,
        min: 13,


    },

    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },



});


const blog = mongoose.model("Posts", postSchema);
module.exports = blog;