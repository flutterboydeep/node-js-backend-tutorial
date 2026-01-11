const user = require("../models/user_model");
const postModel = require("../models/posts_model");
exports.deleteUser = async (id) => {
    console.log("your data in srvices $data", id);

    // User.insertOne(data);
    const post = await user.findByIdAndDelete(id);
    return post;


};
