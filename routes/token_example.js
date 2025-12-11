const express = require("express");
const router = express.Router();



const checkToken = router.use("/validation", (req, res, next) => {

    let { token } = req.query;
    console.log("this is your token value ", token);
    if (token === "give_access") {
        next();

    } else {
        res.send("you are not authentication persion access denied for you");
    }

});

router.get("/validation", (req, res) => {
    res.send("Your welcome you are valid persion");
});

module.exports = router;


