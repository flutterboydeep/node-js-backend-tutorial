const express = require('express');
const app = express();
const initalRoute = require("./routes/user/home_routes");
const mongoose = require("./config/db_config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", initalRoute);


// app.get("/", (req, res) => {
//     res.send("this is main root of localhost");
// });

module.exports = app;