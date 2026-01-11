const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/userDB")
    .then(() => console.log("MongoDB connected")).catch((e) => console.log("Mongoes connection error :", e));
module.exports = mongoose;
