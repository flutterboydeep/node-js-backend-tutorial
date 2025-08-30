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

app.get("/", (req, res) => {
    res.send("ths is root path");
});

app.get("/apple", (req, res) => {
    res.send("This is apple directory");
});
app.get("/mango", (req, res) => {
    res.send("This is mango directory");
});
app.get(/.*/, (req, res) => {
    res.send("This directory is empty or default directory");
});
