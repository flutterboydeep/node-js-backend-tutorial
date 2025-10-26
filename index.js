

const express = require("express");
const path = require('path');
const app = express();
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')
let port = 8080;
app.listen(port, () => {
    console.log("the app is running at port ", port);

});
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));




let arr = [
    {
        'id': 'jkjkjg',
        'username': 'Deep',
        'comment': 'how are you everyone',

    },
    {
        'id': 'jkjkjgfsfs',
        'username': 'Deep',
        'comment': 'how are you everyone and i am now sleeping',

    }
];

app.get("/", (req, res) => {
    res.render("index.ejs", { arr }

    );

});
app.get("/new", (req, res) => {
    res.render("form.ejs");

});

app.post("/posts", (req, res) => {
    let { username, comment } = req.body;
    const myUUID = uuidv4();
    let data = {
        'id': myUUID,
        'comment': comment,
        'username': username,
    }
    arr.push(data);
    res.redirect("/");

    console.log(data);


});

app.get("/posts/:id/details", (req, res) => {
    let { id } = req.params;

    let post = arr.find((e) => e.id === id);
    console.log("id is = ", id);
    res.render("view_details_post.ejs", { post });

});

app.patch("/posts/:id/edits", (req, res) => {
    let { id } = req.params;
    const data = req.body;
    let post = arr.find((e) => e.id === id);
    post.comment = req.body.comment;
    res.redirect('/');



    console.log(post);





    // console.log("func tion is running ...",);
    // res.send("Patch request is working fine");

});

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = arr.find((e) => e.id === id);
    res.render('update_form.ejs', { post });

});

app.delete("/posts/:id/delete", (req, res) => {
    let { id } = req.params;
    arr = arr.filter((e) => e.id !== id);
    console.log(arr);

    res.render('index.ejs', { arr });

});

//     console.log(data);S


// });



app.get(/.*/, (req, res) => {
    res.send("This directory is empty or default directory ");
});
