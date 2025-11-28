const express = require("express");
const blog = require("../models/posts_schema.js");
const router = express.Router();

router.get("/", async (req, res) => {
    const data = await blog.find();
    res.send(data);
});
module.exports = router;