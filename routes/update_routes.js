const express = require("express");
const blog = require("../models/posts_schema.js");
const router = express.Router();

router.patch("/edit/:id", async (req, res) => {


    // console.log("patch function is running"); ``

    const id = req.params.id;
    if (id != null) {
        try {
            const { title, body, age } = req.body;
            const updationData = {
                title: title,
                body: body,
                age: age,
                updatedAt: Date.now(),
            }

            blog.findByIdAndUpdate(id, updationData, { runValidators: true, new: true }).then((respo) => {
                res.status(200).json({
                    success: true,
                    data: respo
                });

            }).catch((err) => {
                res.status(403).json({
                    success: false,
                    message: err['message'],
                    error: err
                });
            });

        } catch (e) {
            res.status(404).json({
                success: false,
                message: e['message'],
            });
        }
    }

    console.log(
        "your document id is ", id
    )
    const { title, body } = req.body;
    console.log(`this is body ${body} and this title ${title}`);
    // blog.findByIdAndUpdate(id,)



});
module.exports = router;