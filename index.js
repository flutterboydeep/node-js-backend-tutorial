const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const blog = require("./models/posts_schema.js");
const getBlogs = require("./routes/get_routes.js");
const postBlogs = require("./routes/post_routes.js");
const editBlogs = require("./routes/update_routes.js");
const deleteBlog = require("./routes/delete_routes.js");





app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //
main().then((res) => { console.log("Mongodb connection successfully") }).catch((err) => console.log("mongo db conncetion error: ", err));

app.get("/", (req, res) => {
    res.send("Api working perfectly");
});

app.use("/blogs", getBlogs);
app.use("/blogs", postBlogs);
app.use("/blogs", editBlogs);
app.use("/blogs", deleteBlog);
app.use("/blogs", deleteBlog);

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