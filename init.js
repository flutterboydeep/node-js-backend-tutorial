const mongoose = require("mongoose");
const blog = require("./models/posts_schema");
main().then((res) => { console.log("mongo db connection successful") }).catch((err) => { console.log("mongo db connection error:", err) });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/blogDb");
}



const postData = [
    {
        title: "Morning Walk",
        body: "Went for a peaceful morning walk in the park and enjoyed nature a lot.",
        age: 25,
        username: "deep_panwar",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: "Coding Life",
        body: "Learning Node.js and MongoDB is fun but requires a lot of practice.",
        age: 21,
        username: "coder_raj",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: "Fitness Goals",
        body: "Started gym from this week to maintain a healthy lifestyle.",
        age: 28,
        username: "fit_guru",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: "Travel Diaries",
        body: "Visited Manali with friends last weekend and it was an amazing experience.",
        age: 19,
        username: "traveller_anu",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: "Study Mode",
        body: "Preparing for my final year exams and focusing on backend development.",
        age: 23,
        username: "student_dev",

    }
];
blog.insertMany(postData).then((res) => { "data insert successfully" }).catch((err) => { "data insertion error " });
