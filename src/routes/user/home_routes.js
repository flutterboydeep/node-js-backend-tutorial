const express = require('express');
const router = express.Router();
const initalRoute = require('../../controllers/home_controller.js');




router.get("/", initalRoute.homeCtrl);
router.get("/getUser", initalRoute.getUser);
router.post("/createUser", initalRoute.createUser);

router.post("/getUser/posts/upload", initalRoute.uploadPost);
router.get("/getUser/posts", initalRoute.getPost);

router.delete("/getUser/deleteUser/:id", initalRoute.deleteUser);

// router.post("/uploadPost",initalRoute.)



module.exports = router;