const userPost = require('../models/posts_model');
exports.postUser = async (data) => {
    console.log("your data in srvices $data", data);
    // User.insertOne(data);
    const post = await userPost.insertOne(data);
    return post;

};