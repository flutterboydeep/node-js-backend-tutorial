const express = require("express");
const blog = require("../models/posts_schema.js");
const router = express.Router();

router.delete("/delete/:id", async (req, res) => {


    console.log("delete function is running");

    const id = req.params.id;
    if (id != null) {

        try {
            const deleteData = await blog.findByIdAndDelete(id);
            // console.log("the delete data is ", deleteData);
            if (deleteData != null) {
                res.status(200).json({
                    success: true,
                    message: "Successfully delete the item",
                    data: deleteData,
                });

            } else {
                res.status(404).json({
                    success: false,
                    message: "Data Not found on this particuler id",
                    data: deleteData,
                })

            }



        } catch (e) {
            res.status(500).json({
                success: false,
                message: e['message'],
                errror: e.toString(),
            });
        }
    } else {
        res.status(404).json("Id not found");
    }


    // blog.findByIdAndUpdate(id,)



});
module.exports = router;