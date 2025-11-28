const express = require("express");
const blog = require("../models/posts_schema.js");
const router = express.Router();

router.post("/add", async (req, res) => {
    const bodyData = req.body;
    console.log(bodyData);
    try {
        const data = await blog.insertOne(bodyData);
        res.status(200).json({
            sucess: true,
            count: data.length,
            message: "Blog upload successfully",
            data: data,
        });

    } catch (e) {
        res.status(200).json({
            sucess: false,
            message: e['message'],
            error: e,
        });
    }
});
module.exports = router;