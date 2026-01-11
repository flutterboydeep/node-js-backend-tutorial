const posts = require("../models/posts_model");

exports.getPosts = async () => {
    const postsData = await posts.find();
    return postsData;
}