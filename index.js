const express = require("express");
const app = express();
// console.dir(app);
let port = 8080;
app.listen(port, () => {
    console.log("App starting at port", port);
});


//<---------------ye function hamesa call hota hai jub bhi server ko call kiya jata hai---->
// app.use((req, res) => {
//     res.send("app Use function is running when any action perform on  server");
// });

app.use(express.urlencoded({ extended: true })); // ab express samaj  jaye ga ki data url encode hai
app.use(express.urlencoded(express.json())); // ab express samaj  jaye ga ki row data hai

app.get("/", (req, res) => {
    // let { user } = req.query;
    res.send(`this is root path`);
});



app.get("/new", (req, res) => {           //    http://localhost:8080/new?user="hello"
    let { user } = req.query;
    if (!user) {
        console.log("not found");
    }
    console.log("this is user ", user);
    res.send(`this is user ${user}`);
});



app.post("/userdata", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});


app.get(/.*/, (req, res) => {
    res.send("This directory is empty or default directory ");
});
