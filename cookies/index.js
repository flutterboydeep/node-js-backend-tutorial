const express = require('express');
const app = express();
const cookie_parser = require('cookie-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use(cookie_parser("mySecrateCode123"));


app.get("/", (req, res) => {
    res.send("this is inital route");
});

app.get("/setCookies", (req, res) => {
    res.cookie("secrate", "hello12345", { signed: true });
    res.send("Sent you some cookies check it now");

});



app.get("/getCookies", (req, res) => {
    const cookie = req.signedCookies;
    console.log(cookie);
    res.json({
        message: "Cookies received",
        cookies: cookie
    });

});

app.listen(3000, () => {
    console.log("App for cookies is running on port http://localhost:3000");
})