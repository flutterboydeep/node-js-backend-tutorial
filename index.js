const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const blog = require("./models/posts_schema.js");
const getBlogs = require("./routes/get_routes.js");
const postBlogs = require("./routes/post_routes.js");
const editBlogs = require("./routes/update_routes.js");
const deleteBlog = require("./routes/delete_routes.js");
const tokenValidation = require("./routes/token_example.js");




app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //
// app.use((req, res, next) => {
//     req.resoponseTime = new Date(Date.now()).toString();
//     console.log("This is middle ware and method is ", req.method, "path is=", req.path, "and host name is ", req.hostname, "and time is", req.resoponseTime);
//     next();
// });
main().then((res) => { console.log("Mongodb connection successfully") }).catch((err) => console.log("mongo db conncetion error: ", err));

app.get("/", (req, res) => {
    res.send("Api working perfectly");
});


// middlewhare token validation ------------>
// const checkToken= app.use("/validation", (req, res, next) => {
//     let { token } = req.query;
//     console.log("this is your token value ", token);
//     if (token === "give_access") {
//         next();

//     } else {
//         res.send("you are not authentication persion access denied for you");
//     }

// });

app.use("/", tokenValidation);
// middleware token validation end -------------->


// another way to set middle ware 


app.use((req, res, next) => {
    res.send("page not found");
});


//  for add token validation 



// app.use("/blogs", getBlogs);
// app.use("/blogs", postBlogs);
// app.use("/blogs", editBlogs);
// app.use("/blogs", deleteBlog);
// app.use("/blogs", deleteBlog);

// app.get("/blogs", async (req, res) => {
//     const data = await blog.find();
//     res.send(data);
// });


app.listen(8080, () => {
    console.log("App is running port 8080");
});
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/blogDb");
}