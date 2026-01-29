const express = require('express');
const app = express();
const cookie_parser = require('cookie-parser');
const session = require('express-session');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const sessionOption = {
    'secret': "mySecrateCode123",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }

};
app.use(session(sessionOption));

app.get("/", (req, res) => {
    res.send("this is inital route");
});

app.get("/reqCount", (req, res) => {     // this is update the value in differnt tab
    if (req.session.count) {             // count veriable create by me in session 
        req.session.count++;
    } else {
        req.session.count = 1;
    }
    console.log(`reqCount funnction is running and ${req.session.count}`);
    res.send(`you have hit this route is ${req.session.count}`);
});

app.get("/try", (req, res) => {        // this is not updated the value in new tab also the same tab 
    if (req.count) {
        req.count++;
    } else {
        req.count = 1;
    }
    console.log(`reqCount funnction is running and ${req.count}`);
    res.send(`you have hit this route is ${req.count}`);
});

app.get("/setCookies", (req, res) => {
    res.cookie("secrate", "hello12345", { signed: true });
    res.send("Sent you some cookies check it now");

});


app.listen(3000, () => {
    console.log("App for cookies is running on port http://localhost:3000");
})