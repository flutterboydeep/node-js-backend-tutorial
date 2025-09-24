

const express = require("express");
const path = require('path');
const app = express();
let port = 8080;
app.listen(port, () => {
    console.log("the app is running at port ", port);

});

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));




let arr = [
    {
        'id': 'jkjkjg',
        'name': 'Deep',
        'comment': 'how are you everyone',

    },
    {
        'id': 'jkjkjg',
        'name': 'Deep',
        'comment': 'how are you everyone',

    }
];

app.get("/", (req, res) => {
    res.render("index.ejs", { arr }

    );

});



app.get(/.*/, (req, res) => {
    res.send("This directory is empty or default directory ");
});
