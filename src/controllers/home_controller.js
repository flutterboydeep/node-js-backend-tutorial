const getUserServices = require("../services/get_user_services");
const postUserServices = require("../services/user_posts_service");
const deleteUsers = require("../services/delete_user_services");
const createUser = require("../services/create_user_services")
const getposts = require("../services/get_posts_services");

// const updateUserServices = require("../services/get_user_services");
exports.homeCtrl = async (req, res) => {
    res.status(200).json({ message: "this is root Directory" });
}


exports.getUser = async (req, res) => {
    try {
        const user = await getUserServices.getUser();
        res.status(201).json(user);
    } catch (e) {
        console.log(e);
        res.status(401).json({
            success: false,
            message: e,
        });
    }
};

exports.createUser = async (req, res) => {
    try {
        const user = await createUser.createUser(req.body);
        res.status(201).json(user);
    }
    catch (e) {
        console.log(e);
        res.status(401).json({
            success: false,
            message: e,
        });
    }
};

exports.getPost = async (req, res) => {
    try {
        const posts = await getposts.getPosts();
        res.status(200).json({
            success: true,
            posts: posts,
        });
    } catch (e) {
        res.status(404).json({
            success: false,
            message: e
        });
    }
}

exports.uploadPost = async (req, res) => {
    try {
        console.log("post user function is running...");
        console.log(req.body);

        const user = await postUserServices.postUser(req.body);
        res.status(201).json(user);
    } catch (e) {
        console.log(e);
        res.status(401).json({
            success: false,
            message: e,
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {

        console.log("delete contorller user function is running...");

        const id = req.params.id;
        const deleteUser = await deleteUsers.deleteUser(id);
        res.status(201).json({
            "success": true,
            "message": "User successfully deleted",
            "data": deleteUser,
        });
    } catch (e) {
        console.log(e);
        res.status(401).json({
            success: false,
            message: e,
        });
    }
};
// postModel.post("findOneAndDelete", async function (next) {
//     console.log("delete middle ware is calling...");
//     // const user = );
//     // delete related data here
//     next();
// });